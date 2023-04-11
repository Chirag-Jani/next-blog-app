const express = require("express");

const Blog = require("../models/Blog");
const router = express.Router();

router.get("/getBlogs", async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json({ success: "Blogs Received", blogs });
});

router.post("/addBlog", async (req, res) => {
  const blogInput = req.body;
  let blog = await Blog.create({
    title: blogInput.title,
    description: blogInput.description,
    content: blogInput.content,
    author: blogInput.author,
  });
  res.status(200).json({ success: true, blog });
});

router.put("/updateBlog/:id", async (req, res) => {
  const { blogInput } = req.body;
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { $set: blogInput },
    { new: true }
  );
  res.status(200).json({ success: true, blog });
});

router.delete("/deleteBlog/:id", async (req, res) => {
  let blog = await Blog.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: "Blog Deleted.", blog });
});

module.exports = router;
