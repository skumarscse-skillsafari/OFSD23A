import Post from "../models/Post.js";
// createPost
export const createPost = (req, res) => {
  new Post(req.body)
    .save()
    .then((post) =>
      res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: post,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// getAllPosts
export const getAllPosts = (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json({ success: true, posts: posts }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// getSinglePost
export const getSinglePost = (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then((post) => res.status(200).json({ success: true, post: post }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// updatePost
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { username, description, duration, date } = req.body;
  await Post.findByIdAndUpdate(id, {
    username: username,
    description: description,
    duration: duration,
    date: date,
  })
    .then((updatedPost) =>
      res.status(200).json({ success: true, updatedPost: updatedPost })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// deletePost
export const deletePost = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndRemove(id)
    .then((deletedPost) =>
      res.status(200).json({
        success: true,
        message: `Post with the id ${id} deleted successfully`,
        deletedPost: deletedPost,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
