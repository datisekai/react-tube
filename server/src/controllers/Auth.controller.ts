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
import nodemailer from "nodemailer";
import config from "../config";
import { transporter } from "../config/mail";

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
        const username = `${email.split("@")[0]}${generateRandomInt(
          1,
          100000
        )}`;
        const hashPassword = await argon2.hash(password);
        const newUser = await UserSchema.create({
          email,
          password: hashPassword,
          avatar: `https://ui-avatars.com/api/?name=${username}`,
          username,
          is_active: false,
        });

        const verificationCode = jwt.sign({ email }, config.jwt_secret);
        const url = `${config.fe_url}/verify-email?code=${verificationCode}`;

        const options = {
          from: "React Tube Authentication",
          to: email,
          subject: "React Tube - Xác thực Email",
          html: `<p>Để xác thực email bạn vui lòng <a href="${url}" style="color:blue;">click vào đây</a> hoặc sử dụng đường dẫn ${url} </p>`,
        };

        await transporter.sendMail(options);

        return res.json({
          success: true,
          data: { ...newUser, password: undefined, refreshToken: undefined },
          message:
            "Đăng ký thành công, bạn vui lòng kiểm tra email để xác thực",
        });
      }

      return res
        .status(404)
        .json({ success: false, message: "Email này đã tồn tại" });
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
          config.jwt_secret,
          {
            expiresIn: "24h",
          }
        );

        const refreshToken = await jwt.sign(
          { id: currentUser.id },
          config.jwt_secret,
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

      const newUser: any = await UserSchema.create({
        email: verify.email,
        avatar: verify.picture,
        username,
      });

      const accessToken = await jwt.sign(
        { id: newUser.id },
        config.jwt_secret,
        {
          expiresIn: "24h",
        }
      );

      const refreshToken = await jwt.sign(
        { id: newUser.id },
        config.jwt_secret,
        {
          expiresIn: "30d",
        }
      );

      newUser.refreshToken = refreshToken;
      await newUser.save();

      const { password, ...user_data } = newUser;
      return res.json({
        success: true,
        user: user_data,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      return showInternal(res, error);
    }
  },
  getMyInfo: async (req, res) => {
    try {
      const id = req.body.id;
      const currentUser = await UserSchema.findByPk(id, {
        attributes: {
          exclude: ["password", "refreshToken"],
        },
      });
      return res.json(currentUser);
    } catch (err) {
      console.log(err);
      return showInternal(res, err);
    }
  },
  verifyEmail: async (req, res) => {
    try {
      const { code } = req.body;
      const decode: any = jwt.verify(code, config.jwt_secret);
      const email = decode.email;

      const currentUser: any = await UserSchema.findOne({ where: { email } });
      if (!currentUser) {
        return res
          .status(404)
          .json({ success: false, message: "Không tìm thấy người dùng" });
      }

      currentUser.is_active = true;
      await currentUser.save();

      return res.json({
        success: true,
        message: "Xác thực thành công, vui lòng đăng nhập",
      });
    } catch (error) {
      return showInternal(res, error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return showMissing(res);
      }

      if (!IsEmail.validate(email)) {
        return showErrorFormat(res);
      }

      const currentUser: any = await UserSchema.findOne({ where: { email } });

      if (!currentUser) {
        return res
          .status(404)
          .json({ success: false, message: "Email không tồn tại" });
      }


      const mathPassword = await argon2.verify(currentUser.password, password);

      
      if (currentUser && !currentUser.is_active && !mathPassword) {
        return res.status(404).json({
          success: false,
          message: "Bạn vui lòng kiểm tra email và xác thực",
        });
      }
      if (currentUser && mathPassword) {
        const accessToken = await jwt.sign(
          { id: currentUser.id },
          config.jwt_secret,
          {
            expiresIn: "24h",
          }
        );

        const refreshToken = await jwt.sign(
          { id: currentUser.id },
          config.jwt_secret,
          {
            expiresIn: "30d",
          }
        );

        currentUser.refreshToken = refreshToken;
        await currentUser.save();

        const { password: password2, ...user_data } = currentUser.dataValues;
        return res.json({
          success: true,
          user: user_data,
          accessToken,
          refreshToken,
        });
      }

      return res.status(404).json({success:false, message:"Email hoặc mật khẩu không chính xác"})
    } catch (error) {
      return showInternal(res, error);
    }
  },
};

export default AuthController;
