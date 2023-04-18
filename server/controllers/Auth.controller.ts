import IsEmail from "isemail";
import {
  showErrorFormat,
  showInternal,
  showMissing,
  showNotFound,
} from "../utils";
import UserSchema from "../models/UserSchema.model";
import argon2 from "argon2";

const AuthController = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return showMissing(res);
      }

      if (!IsEmail.validate(email)) {
        return showErrorFormat(res);
      }

      const isExist = await UserSchema.findOne({
        where: {
          email,
        },
      });

      if (!isExist) {
        const username =
          email.split("@")[0] + `${Math.random() * (1000000 - 1) + 1}`;
        const hashPassword = await argon2.hash(password);
        const newUser = await UserSchema.create({
          email,
          password: hashPassword,
          avatar: `https://ui-avatars.com/api/?name=${username}`,
          username,
        });

        return res.json({ success: true, data: newUser });
      }

      return res
        .status(404)
        .json({ success: false, message: "Email is exist" });
    } catch (error) {
      return showInternal(res, error);
    }
  },
};

export default AuthController;
