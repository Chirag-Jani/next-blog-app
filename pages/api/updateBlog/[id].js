export default async function handler(req, res) {
  const id = req.query.id;
  const blogInput = req.body;
  try {
    const response = await fetch(`http://localhost:5000/api/updateBlog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogInput),
    });
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error(error);
  }
}
