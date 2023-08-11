import { Link } from "react-router-dom";

const Post = ({ post, deletePost }) => {
  return (
    <tr>
      <td>{post.username}</td>
      <td>{post.description}</td>
      <td>{post.duration}</td>
      <td>{post.date.substring(0, 10)}</td>
      <td>
        <Link to={`/post/edit/${post._id}`} style={{ textDecoration: "none" }}>
          <button className="btn btn-secondary">edit</button>{" "}
        </Link>
        <button className="btn btn-danger" onClick={() => deletePost(post._id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default Post;
