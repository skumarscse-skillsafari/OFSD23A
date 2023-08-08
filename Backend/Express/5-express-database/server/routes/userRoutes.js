import express from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();

// create user
// POST => http://localhost:5000/api/v1/users/create
router.post("/create", createUser);

// getAll users
// GET => http://localhost:5000/api/v1/users
router.get("/", getAllUsers);

// getSingle user
// GET => http://localhost:5000/api/v1/users/:id
router.get("/:id", getSingleUser);

// update user
// PUT => http://localhost:5000/api/v1/users/:id
router.put("/:id", updateUser);

// delete user
// DELETE => http://localhost:5000/api/v1/users/:id
router.delete("/:id", deleteUser);

export default router;
