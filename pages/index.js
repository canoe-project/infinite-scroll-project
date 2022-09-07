// import type { NextPage } from 'next'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { useState, useEffect } from "react";
import Card from "../components/Card/ItemCard";
import List from "../components/List/CardList";
import MainLayout from "../components/Layout/MainLayout";
import Head from "next/head";
import Image from "next/image";

const Home = ({ data }) => {
  const [listData, setListData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setListData(data);
    setLoading(false);
  }, []);

  const addList = () => {
    setListData((prevList) => {
      return [...prevList, ...data];
    });
  };

  if (loading) return <div>loading</div>;
  return (
    <MainLayout>
      <List callback={addList}>
        {listData.map((info, idx) => {
          return (
            <Card
              key={idx}
              index={info.index}
              name={info.name}
              image={info.image}
              location={info.location}
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

  return { props: { data } };
};

export default Home;
