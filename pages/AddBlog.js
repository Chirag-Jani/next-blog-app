import { useState } from "react";
import { data } from "../Data/demo";

const AddBlog = () => {
  const [blogInput, setBlogInput] = useState({
    id: 0,
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    setBlogInput({ ...blogInput, [e.target.name]: e.target.value });
  };

  const addToBlogs = async () => {
    blogInput.id = data[data.length - 1].id + 1;

    // call api here

    try {
      const response = await fetch("/api/addData", {
        method: "POST",
        body: JSON.stringify(blogInput),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    // resetting input
    setBlogInput({ title: "", description: "", content: "", author: "" });
  };

  return (
    <div className="d-flex flex-column w-25 m-auto lh-lg mt-5 text-center">
      <h2>Add New Blog</h2>
      <input
        type="text"
        placeholder="Title"
        className="my-2 text-center"
        name="title"
        onChange={handleChange}
        value={blogInput.title}
      />
      <input
        type="text"
        placeholder="Description"
        className="my-2 text-center"
        name="description"
        onChange={handleChange}
        value={blogInput.description}
      />
      <textarea
        id="Content"
        cols="30"
        rows="3"
        className="my-2 text-center"
        placeholder="Enter Content Here"
        name="content"
        onChange={handleChange}
        value={blogInput.content}
      ></textarea>
      <input
        type="text"
        placeholder="Author"
        className="my-2 text-center"
        name="author"
        onChange={handleChange}
        value={blogInput.author}
      />
      <button className="btn btn-primary" onClick={addToBlogs}>
        Add Blog
      </button>
    </div>
  );
};
export default AddBlog;
