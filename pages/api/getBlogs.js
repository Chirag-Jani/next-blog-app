// import { data } from "@/Data/demo";

const getData = async (req, res) => {
  const blogs = await fetch("http://localhost:5000/api/getBlogs");
  const data = await blogs.json();
  res.status(200).json({ data: data });
};

export default getData;
