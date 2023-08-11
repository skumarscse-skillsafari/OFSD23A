import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("https://glamorous-necklace-crab.cyclic.app/api/v1/users/create", {
        username: user,
      })
      .then(() => {
        alert("User created successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h2 className="display-5 text-center">CreateUser</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Enter Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleCreate}
          >
            Create
          </button>
          <button type="reset" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
