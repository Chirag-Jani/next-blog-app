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

module.exports = router;
