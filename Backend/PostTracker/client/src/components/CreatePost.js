import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreatePost = () => {
  const [post, setPost] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users")
      .then((res) => {
        setPost((preVal) => {
          return {
            ...preVal,
            users: res.data.users,
            username: res.data.users[0].username,
          };
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(post);
    const newPost = {
      username: post.username,
      description: post.description,
      duration: post.duration,
      date: post.date,
    };

    axios
      .post("http://localhost:5000/api/v1/posts/create", newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleDate = (date) => {
    setPost((preVal) => {
      return {
        ...preVal,
        date: date,
      };
    });
  };

  //   console.log(post);
  return (
    <div className="container">
      <h2 className="display-5 text-center">CreatePost</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={post.username}
            name="username"
            onChange={handleChange}
          >
            {post.users.map((user) => {
              return (
                <option value={user.username} key={user._id}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description"
            value={post.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Duration"
            value={post.duration}
            onChange={handleChange}
            name="duration"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <br />
          <DatePicker
            className="form-control"
            selected={post.date}
            onChange={handleDate}
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-success" onClick={handleCreate}>
            Create
          </button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
