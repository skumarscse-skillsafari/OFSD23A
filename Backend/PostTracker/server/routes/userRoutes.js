import express from "express";
const router = express.Router();
import { createUser, getAllUsers } from "../controllers/userController.js";

// createUser
router.post("/create", createUser);

// getAllUsers
router.get("/", getAllUsers);

export default router;
