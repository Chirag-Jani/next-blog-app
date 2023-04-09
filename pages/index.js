import Posts from "./Posts";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getBlogs");
      const jsonData = await res.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Posts blogs={data} />
      </div>
    </>
  );
}
