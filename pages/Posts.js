import Link from "next/link";

const Posts = (props) => {
  const { blogs } = props;
  return (
    <div className="d-flex flex-wrap m-5">
      {blogs.data?.blogs.map((p) => {
        return (
          <div key={p.id} className="border border-dark m-2 p-3">
            <h3>{p.title}</h3>
            <p className="fs-5">
              {p.description.slice(0, 25)}... {"  "}
              <Link className="fs-6" href={`blogs/${p.title}`}>
                Read More
              </Link>
            </p>
            <p>- By {p.author}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
