import User from "../models/user.model.mjs";
import { errorLog } from "../utils/messageLog.mjs";

export const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ status: false, message: "Email already at use!" });
    }

    const newUser = await User.create({
      userName,
      email,
      password,
    });

    await newUser.save();

    res
      .status(200)
      .json({
        status: true,
        message: "User created successfully!",
        data: newUser,
      });
  } catch (error) {
    errorLog(error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};
