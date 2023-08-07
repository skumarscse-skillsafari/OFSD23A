import users from "../data.js";
// getUsers
export const getUsers = (req, res) => {
  try {
    res.status(200).json({ message: "success", data: users });
  } catch (error) {
    console.log(error);
  }
};

// getUser
export const getUser = (req, res) => {
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
};

// createUser
export const createUser = (req, res) => {
  try {
    console.log(req.body);
    res
      .status(201)
      .json({ message: "User created successfully", data: req.body });
  } catch (error) {
    console.log(error);
  }
};

// updateUser
export const updateUser = (req, res) => {
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
};

// deleteUser
export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    let getUser = users.find((user) => user.id === Number(id));
    if (!getUser) {
      return res
        .status(200)
        .json({ message: `User with the id: ${id} not found` });
    }
    let updatedUser = users.filter((user) => user.id !== Number(id));
    res.status(200).json({
      message: `User with the is: ${id} deleted successfully`,
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};
