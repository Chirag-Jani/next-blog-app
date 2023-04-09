import { data } from "../../Data/demo"; // Assuming data is an array of objects defined in a separate file

const fs = require("fs");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { blogInput } = req.body; // Assuming the request body contains the properties for the new object

    data.push(blogInput); // Adding the new object to the data array

    // Write the updated data array back to the file (optional)
    fs.writeFile(
      "../../Data/demo.js",
      `export const data = ${JSON.stringify(data)}`,
      (err) => {
        if (err) throw err;
        console.log("Blog Added to File.");
      }
    );

    res
      .status(200)
      .json({ message: "New Blog added successfully", data: blogInput });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
