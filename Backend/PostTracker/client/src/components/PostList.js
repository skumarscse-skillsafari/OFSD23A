import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://glamorous-necklace-crab.cyclic.app/api/v1/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    // console.log(id);
    if (window.confirm("Are you sure to delete the post?")) {
      axios
        .delete(`https://glamorous-necklace-crab.cyclic.app/api/v1/posts/${id}`)
        .then(() => {
          alert("Post deleted successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  //   console.log(posts);
  return (
    <div className="container">
      <h2 className="display-5 text-center">PostList</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post key={post._id} post={post} deletePost={deletePost} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
