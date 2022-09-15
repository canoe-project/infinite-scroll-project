// import type { NextPage } from 'next'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { useState, useEffect, useRef, useCallback } from "react";
import Card from "../components/Card/ItemCard";
import List from "../components/List/CardList";
import MainLayout from "../components/Layout/MainLayout";
import ScrollBar from "../components/Scroll/ScrollBar";
import throttle from "lodash/throttle";

const reqCul = async (pageNo) => {
  const cultureRes = await fetch(
    `${process.env.HOSTNAME}/api/culture/static?pageNo=${pageNo}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const cultureData = await cultureRes.json();
  return cultureData;
};

const Home = ({ mainHeadCopy, cultureData }) => {
  //data state
  const [headCopy, setHeadCopy] = useState("");
  const [culture, setculture] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState();

  //style state
  const [marginTops, setMarginTops] = useState([5.21, 3, 0]);
  const [marginBottoms, setMarginBottoms] = useState([0, 3, 5.21]);

  //ref
  const barRef = useRef();
  const listRef = useRef();

  //useCallback
  const listHandle = useCallback(
    throttle(() => {
      setPageNo((prePage) => prePage + 1);
    }, 600),
    []
  );

  //useEffect
  useEffect(() => {
    setPageNo(2);
  }, []);

  useEffect(() => {
    Promise.all([setHeadCopy(mainHeadCopy), setculture(cultureData)]).then(() =>
      setLoading(false)
    );
  }, [mainHeadCopy, cultureData]);

  useEffect(() => {
    if (!(pageNo > 10) && pageNo !== undefined) {
      reqCul(pageNo).then((cultureData) => {
        setculture((preCulture) => [...preCulture, ...cultureData]);
      });
    }
    // else if (pageNo > 10) {
    //   listRef.current.scrollTo({
    //     left: 0,
    //   });
    // }
  }, [pageNo]);

  if (loading) return <div>loading</div>;
  return (
    <MainLayout mainHeadCopy={headCopy}>
      <List
        bar={<ScrollBar barRef={barRef} />}
        handle={listHandle}
        barRef={barRef}
      >
        {culture.map((info, idx) => {
          return (
            <Card
              key={idx}
              index={idx}
              name={info.title}
              image={info.referenceIdentifier}
              location={info.publisher}
              marginTops={marginTops}
              marginBottoms={marginBottoms}
            ></Card>
          );
        })}
      </List>
    </MainLayout>
  );
};

export const getServerSideProps = async (context) => {
  const cultureRes = await fetch(
    `${process.env.HOSTNAME}/api/culture/static?pageNo=1`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const cultureData = await cultureRes.json();

  const mainHeadCopyRes = await fetch(
    `${process.env.HOSTNAME}/api/copys/headcopy`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const mainHeadCopy = await mainHeadCopyRes.json();

  return {
    props: {
      mainHeadCopy,
      cultureData,
    },
  };
};

export default Home;
