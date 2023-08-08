import User from "../models/User.js";
// createUser
export const createUser = (req, res) => {
  new User(req.body)
    .save()
    .then((user) =>
      res.status(201).json({ message: "User creates successfully", data: user })
    )
    .catch((err) => console.log(err));
};

// getAllUsers
export const getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json({ success: true, data: users }))
    .catch((err) => console.log(err));
};

// getSingleUser
export const getSingleUser = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => res.status(200).json({ success: true, data: user }))
    .catch((err) => console.log(err));
};

// updateUser
export const updateUser = (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  User.findByIdAndUpdate(id, {
    name: newData.name,
    age: newData.age,
    city: newData.city,
  })
    .then((updatedData) =>
      res.status(200).json({ success: true, data: updatedData })
    )
    .catch((err) => console.log(err));
};

// deleteUser
export const deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndRemove(id)
    .then((user) =>
      res.status(200).json({ message: "User deleted successfully", data: user })
    )
    .catch((err) => console.log(err));
};
