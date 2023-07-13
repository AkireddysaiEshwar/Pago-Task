import User from "../model/user.js";
// import bcrypt from "bcrypt";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};

export const login = async (req, res, next) => {
  const { user, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ password });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "incorrect password" });
  }
  return res
    .status(200)
    .json({ message: "Login Successfull", user: existingUser });
};
