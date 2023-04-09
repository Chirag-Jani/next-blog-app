const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = Schema({
  id: Number,
  title: String,
  description: String,
  content: String,
  author: String,
});

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = Blog;
