import { data } from "@/Data/demo";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { title } = router.query;
  let blog = data.find((blog) => blog.title === title);
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <p>{blog.content}</p>
      <p>- By {blog.auther}</p>
    </div>
  );
};
export default Post;
