const express = require("express");
const router = express.Router();

router.get("/getBlogs", (req, res) => {
  res.status(200).json({ success: "Blogs Received" });
});

module.exports = router;
