export const registerUser = (req, res) => {
  res.status(200).json({ message: "User created successfully" });
};

export const signInUser = (req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
};
