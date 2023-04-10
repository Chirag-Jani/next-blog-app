export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    // // call api here
    // console.log("ID at next api", id);
    console.log(req.body);
    res.status(200).json({ id });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
