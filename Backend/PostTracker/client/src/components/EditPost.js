import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [post, setPost] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

  useEffect(() => {
    axios
      .get(`https://glamorous-necklace-crab.cyclic.app/api/v1/posts/${id}`)
      .then((res) =>
        setPost((preVal) => {
          return {
            ...preVal,
            username: res.data.post.username,
            description: res.data.post.description,
            duration: res.data.post.duration,
            date: new Date(res.data.post.date),
          };
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

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
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(post);
    const newPost = {
      username: post.username,
      description: post.description,
      duration: post.duration,
      date: post.date,
    };

    axios
      .put(
        `https://glamorous-necklace-crab.cyclic.app/api/v1/posts/${id}`,
        newPost
      )
      .then((res) => {
        alert("Post updated successfully");
        navigate("/");
        console.log(res.data);
      })
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
      <h2 className="display-5 text-center">Edit Post</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={post.username}
            name="username"
            onChange={handleChange}
          >
            <option value={post.username} key={post._id}>
              {post.username}
            </option>
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
          <div className="form-control">
            <DatePicker
              selected={post.date}
              onChange={handleDate}
              className="border-0"
            />
          </div>
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button type="reset" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
