import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Post = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getBlogs");
      const jsonData = await res.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const { title } = router.query;
    if (data && data.data && data.data.blogs) {
      let blog = data.data.blogs.find((blog) => blog.title === title);
      setBlog(blog);
    }
  }, [data, router.query.title]);

  return (
    <div className="mx-4 my-3 ">
      <Link
        className="text-white text-decoration-none btn btn-primary my-2"
        href="/"
      >
        Back
      </Link>
      {blog && (
        <div>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <p className="w-75">{blog.content}</p>
          <p>- By {blog.author}</p>
        </div>
      )}
    </div>
  );
};
export default Post;
