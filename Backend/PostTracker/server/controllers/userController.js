import User from "../models/User.js";
// createUser
export const createUser = (req, res) => {
  new User(req.body)
    .save()
    .then((user) =>
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// getAllUsers
export const getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json({ success: true, users: users }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
