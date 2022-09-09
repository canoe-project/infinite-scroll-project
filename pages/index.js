// import type { NextPage } from 'next'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { useState, useEffect } from "react";
import Card from "../components/Card/ItemCard";
import List from "../components/List/CardList";
import MainLayout from "../components/Layout/MainLayout";
import useStyleCard from "../hook/useStyleCard";

const Home = ({ data, mainHeadCopy }) => {
  const [listData, setListData] = useState("");
  const [headCopy, setHeadCopy] = useState("");
  const [loading, setLoading] = useState(true);
  const dark = {
    backgroundColor: "#1c1c21",
  };

  useEffect(() => {
    Promise.all([setListData(data), setHeadCopy(mainHeadCopy)]).then(() => {
      setLoading(false);
    });
  }, [data, mainHeadCopy]);

  if (loading) return <div>loading</div>;
  return (
    <MainLayout mainHeadCopy={headCopy}>
      <List>
        {listData.map((info, idx) => {
          return (
            <Card
              key={idx}
              index={info.index}
              name={info.name}
              image={info.image}
              location={info.location}
              mod={dark}
            ></Card>
          );
        })}
      </List>
    </MainLayout>
  );
};

export const getServerSideProps = async (context) => {
  const data = await fetch(`${process.env.HOSTNAME}/api/files`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (response) => {
    return await response.json();
  });

  const mainHeadCopy = await fetch(
    `${process.env.HOSTNAME}/api/copys/headcopy`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(async (response) => {
    return await response.json();
  });

  return { props: { data, mainHeadCopy } };
};

export default Home;
