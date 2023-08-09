import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// createPost
router.post("/create", createPost);

// getAllPosts
router.get("/", getAllPosts);

// getSinglePost
router.get("/:id", getSinglePost);

// updatePost
router.put("/:id", updatePost);

// deletePost
router.delete("/:id", deletePost);

export default router;
