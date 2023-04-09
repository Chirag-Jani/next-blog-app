import Link from "next/link";

const Posts = (props) => {
  const { blogs } = props;
  console.log(blogs.data);
  return (
    <div>
      {blogs.data?.map((p) => {
        return (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>
              {p.description.slice(0, 25)}... {"  "}
              <Link href={`blogs/${p.title}`}>Read More</Link>
            </p>
            <p>- By {p.auther}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
