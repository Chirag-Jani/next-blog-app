export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    // call api here
    const blog = await fetch(`http://localhost:5000/api/deleteBlog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await blog.json();
    res.status(200).json({ data });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
