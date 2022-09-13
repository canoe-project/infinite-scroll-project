// import type { NextPage } from 'next'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { useState, useEffect, useRef } from "react";
import Card from "../components/Card/ItemCard";
import List from "../components/List/CardList";
import MainLayout from "../components/Layout/MainLayout";
import ScrollBar from "../components/Scroll/ScrollBar";

const Home = ({
  // data,
  mainHeadCopy,
  cultureData,
}) => {
  // const [listData, setListData] = useState("");
  const [headCopy, setHeadCopy] = useState("");
  const [culture, setculture] = useState({});
  const [loading, setLoading] = useState(true);
  const [marginTops, setMarginTops] = useState([5.21, 3, 0]);
  const [marginBottoms, setMarginBottoms] = useState([0, 3, 5.21]);

  const barRef = useRef();
  useEffect(() => {
    Promise.all([
      // setListData(data),
      setHeadCopy(mainHeadCopy),
      setculture(cultureData),
    ]).then(() => {
      setLoading(false);
      console.log(cultureData);
    });
  }, [
    // data,
    mainHeadCopy,
    cultureData,
  ]);

  if (loading) return <div>loading</div>;
  return (
    <MainLayout mainHeadCopy={headCopy}>
      {/* <List barRef={barRef}>
        {listData.map((info, idx) => {
          return (
            <Card
              key={idx}
              index={idx}
              name={info.name}
              image={info.image}
              location={info.location}
              marginTops={marginTops}
              marginBottoms={marginBottoms}
            ></Card>
          );
        })}
      </List> */}
      <List barRef={barRef}>
        {culture.map((info, idx) => {
          return (
            <Card
              key={idx}
              index={idx}
              name={info.title[0]}
              image={info.referenceIdentifier[0]}
              location={info.publisher[0]}
              marginTops={marginTops}
              marginBottoms={marginBottoms}
            ></Card>
          );
        })}
      </List>
      <ScrollBar barRef={barRef}></ScrollBar>
    </MainLayout>
  );
};

export const getServerSideProps = async (context) => {
  const cultureData = await fetch(`${process.env.HOSTNAME}/api/culture`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (response) => {
    return await response.json();
  });

  // const data = await fetch(`${process.env.HOSTNAME}/api/files`, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // }).then(async (response) => {
  //   return await response.json();
  // });

  const mainHeadCopy = await fetch(
    `${process.env.HOSTNAME}/api/copys/headcopy`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(async (response) => {
    return await response.json();
  });

  return {
    props: {
      // data,
      mainHeadCopy,
      cultureData,
    },
  };
};

export default Home;
