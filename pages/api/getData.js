import { data } from "@/Data/demo";

const getData = (req, res) => {
  res.status(200).json({ data: data });
};

export default getData;
