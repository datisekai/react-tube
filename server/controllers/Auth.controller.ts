import IsEmail from "isemail";
import {
  generateRandomInt,
  showErrorFormat,
  showInternal,
  showMissing,
  showNotAuthorized,
  showNotFound,
} from "../utils";
import UserSchema from "../models/UserSchema.model";
import argon2 from "argon2";
import { auth } from "../config/firebase";
import jwt from "jsonwebtoken";

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
  loginSocial: async (req, res) => {
    try {
      const { token } = req.body;

      if (!token) {
        return showNotAuthorized(res);
      }

      const verify = await auth.verifyIdToken(token);

      const currentUser: any = await UserSchema.findOne({
        where: {
          email: verify.email,
        },
      });

      if (currentUser) {
        const accessToken = await jwt.sign(
          { id: currentUser.id },
          process.env.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        );

        const refreshToken = await jwt.sign(
          { id: currentUser.id },
          process.env.JWT_SECRET,
          {
            expiresIn: "30d",
          }
        );

        currentUser.refreshToken = refreshToken;
        await currentUser.save();

        const { password, ...user_data } = currentUser;
        return res.json({
          success: true,
          user: user_data,
          accessToken,
          refreshToken,
        });
      }

      const username = `${verify?.email?.split("@")[0]}${generateRandomInt(
        1,
        100000
      )}`;

      const newUser:any = await UserSchema.create({
        email: verify.email,
        avatar: verify.picture,
        username,
      });

      const accessToken = await jwt.sign(
        { id: newUser.id },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      const refreshToken = await jwt.sign(
        { id: newUser.id },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      newUser.refreshToken = refreshToken;
      await newUser.save();

      const { password, ...user_data } = newUser;
      return res.json({success:true, user:user_data, accessToken, refreshToken})

    } catch (error) {
      return showInternal(res, error);
    }
  },
  getMyInfo:async(req, res) => {
    try{
      const id = req.body.id;
      const currentUser = await UserSchema.findByPk(id, {
        attributes:{
          exclude:['password','refreshToken']
        }
      })
      return res.json(currentUser)
    }catch(err){
      console.log(err)
      return showInternal(res, err)
    }
  }
};

export default AuthController;
