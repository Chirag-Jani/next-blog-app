import { data } from "@/Data/demo";
import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { title } = router.query;
  let blog = data.find((blog) => blog.title === title);
  return (
    <div className="mx-4 my-3 ">
      <Link
        className="text-white text-decoration-none btn btn-primary my-2"
        href="/"
      >
        Back
      </Link>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <p className="w-75">{blog.content}</p>
      <p>- By {blog.author}</p>
    </div>
  );
};
export default Post;
