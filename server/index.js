const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure API routes
app.use("/api", require("./api/blogs"));

// Start the server
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});

connectDB();
