import express from "express";
import { registerUser, signInUser } from "../controllers/authController.js";
const router = express.Router();

// Sign-up
router.post("/registration", registerUser);

// Sign-in
router.post("/signin", signInUser);

export default router;
