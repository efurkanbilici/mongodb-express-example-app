import { UserModel } from "../models/index.js";

export const newUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await UserModel.create({
      name,
      email,
      password,
    });

    console.log(newUser);
    res.json({
      ok: 1,
      message: "user created successfully!",
    });
  } catch (e) {
    res.json({
      ok: 0,
      message: "an error occurred",
      error: e,
    });
  }
};
