import Head from "next/head";
import { Inter } from "next/font/google";
import Posts from "./Posts";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getData");
      const jsonData = await res.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        {/* Setting Title */}
        <title>First Next App</title>
      </Head>
      <div>
        <Posts blogs={data} />
      </div>
    </>
  );
}
