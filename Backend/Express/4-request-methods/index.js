import express from "express";
import data from "./data.js";
import users from "./data.js";
const app = express();
const PORT = 5000;

app.use(express.json());
// http methods
app.get("/", (req, res) => {
  try {
    res.status(200).send("<h1>Welcome to HTTP Methods</h1>");
  } catch (error) {
    console.log(error);
  }
});

// Getting all the users
// http://localhost:5000/api/v1/users
app.get("/api/v1/users", (req, res) => {
  try {
    res.status(200).json({ message: "success", data: users });
  } catch (error) {
    console.log(error);
  }
});

// Get single user => url + id
// http://localhost:5000/api/v1/users/:id
app.get("/api/v1/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = users.find((user) => user.id === Number(id));
    if (!singleUser) {
      return res.status(200).json({ message: "success", data: [] });
    }
    res.status(200).json({ message: "success", data: singleUser });
  } catch (error) {
    console.log(error);
  }
});

// Create User
// http://localhost:5000/api/v1/users/create
app.post("/api/v1/users/create", (req, res) => {
  try {
    console.log(req.body);
    res
      .status(201)
      .json({ message: "User created successfully", data: req.body });
  } catch (error) {
    console.log(error);
  }
});

// Update user => url + id
// Create User
// http://localhost:5000/api/v1/users/:id
app.put("/api/v1/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    let getUser = users.find((user) => user.id === Number(id));
    if (!getUser) {
      return res
        .status(200)
        .json({ message: `User with the id: ${id} not found` });
    }
    let { id: uid, name, age, city } = req.body;
    let updatedUser = users.map((user) => {
      if (user.id === Number(id)) {
        return {
          id: uid,
          name: name,
          age: age,
          city: city,
        };
      }
      return user;
    });
    res
      .status(200)
      .json({ message: "Updated successfully", data: updatedUser });
  } catch (error) {
    console.log(error);
  }
});

// Delete user => url + id
// Create User
// http://localhost:5000/api/v1/users/:id
app.delete("/api/v1/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    let getUser = users.find((user) => user.id === Number(id));
    if (!getUser) {
      return res
        .status(200)
        .json({ message: `User with the id: ${id} not found` });
    }
    let updatedUser = users.filter((user) => user.id !== Number(id));
    res
      .status(200)
      .json({
        message: `User with the is: ${id} deleted successfully`,
        data: updatedUser,
      });
  } catch (error) {
    console.log(error);
  }
});

// listen
app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
