import Link from "next/link";
import { useState } from "react";

const Posts = (props) => {
  const { blogs } = props;

  const [blogInput, setBlogInput] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    setBlogInput({ ...blogInput, [e.target.name]: e.target.value });
  };

  const updateBlog = async (id) => {
    try {
      const response = await fetch(`/api/updateBlog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogInput }),
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBlog = async (id) => {
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

            <>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${p._id}-`}
                onClick={() => {
                  setBlogInput({
                    title: p.title,
                    description: p.description,
                    content: p.content,
                    author: p.author,
                  });
                }}
              >
                Edit
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id={`exampleModal-${p._id}-`}
                tabIndex={-1}
                aria-labelledby={`exampleModal-${p._id}-Label`}
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id={`exampleModal-${p._id}-Label`}
                      >
                        Update your Blog
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body d-flex flex-column w-50 m-auto lh-lg text-center">
                      <input
                        type="text"
                        placeholder="Title"
                        className="my-2 text-center"
                        name="title"
                        onChange={handleChange}
                        value={blogInput.title}
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        className="my-2 text-center"
                        name="description"
                        onChange={handleChange}
                        value={blogInput.description}
                      />
                      <textarea
                        id="Content"
                        cols="30"
                        rows="3"
                        className="my-2 text-center"
                        placeholder="Enter Content Here"
                        name="content"
                        onChange={handleChange}
                        value={blogInput.content}
                      ></textarea>
                      <input
                        type="text"
                        placeholder="Author"
                        className="my-2 text-center"
                        name="author"
                        onChange={handleChange}
                        value={blogInput.author}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          updateBlog(p._id);
                        }}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
