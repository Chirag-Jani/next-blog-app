export default async function handler(req, res) {
  if (req.method === "POST") {
    const blogInput = req.body; // Assuming the request body contains the properties for the new object
    // call api here
    const blogs = await fetch("http://localhost:5000/api/addBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogInput),
    });

    const data = await blogs.json();
    res.status(200).json({ data });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
