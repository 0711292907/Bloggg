

//export default Book
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios only once
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/posts");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

  console.log(postss);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/postss/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Blog app</h1>
      <div className="posts">
        {books.map((post) => (
          <div key={posts.id} className="post">
            
            <h2>{Post.title}</h2>
            <p>{Post.descr}</p>
            <span>{Post.user_name}</span>
            <button className="delete" onClick={() => handleDelete(Post.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${PostS.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Post
        </Link>
      </button>
    </div>
  );
};

export default Books;
