import Link from "next/link";

const Posts = (props) => {
  const { blogs } = props;
  const deleteBlog = async (id) => {
    console.log("id before calling api: ", id);
    try {
      const response = await fetch(`/api/deleteBlog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex flex-wrap m-5">
      {blogs.data?.blogs.map((p) => {
        return (
          <div key={p._id} className="border border-dark m-2 p-3">
            <h3>{p.title}</h3>
            <p className="fs-5">
              {p.description.slice(0, 25)}... {"  "}
              <Link className="fs-6" href={`blogs/${p.title}`}>
                Read More
              </Link>
            </p>
            <p>- By {p.author}</p>
            <button
              className="btn btn-danger me-3"
              onClick={() => {
                deleteBlog(p._id);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                console.log(p._id);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
