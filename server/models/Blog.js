const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = Schema({
  title: String,
  description: String,
  content: String,
  author: String,
});

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = Blog;
