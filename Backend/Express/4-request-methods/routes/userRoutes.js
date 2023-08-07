import express from "express";
const router = express.Router();
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
// http methods
// app.get("/", (req, res) => {
//   try {
//     res.status(200).send("<h1>Welcome to HTTP Methods</h1>");
//   } catch (error) {
//     console.log(error);
//   }
// });

// Getting all the users
// http://localhost:5000/api/v1/users
router.get("/", getUsers);

// Get single user => url + id
// http://localhost:5000/api/v1/users/:id
// router.get("/:id", getUser);

// Create User
// http://localhost:5000/api/v1/users/create
router.post("/create", createUser);

// Update user => url + id
// http://localhost:5000/api/v1/users/:id
// router.put("/:id", updateUser);

// Delete user => url + id
// http://localhost:5000/api/v1/users/:id
// router.delete("/:id", deleteUser);

// Routes using chain method
// router.get("/:id", getUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
