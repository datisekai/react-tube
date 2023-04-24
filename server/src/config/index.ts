import dotenv from "dotenv";

dotenv.config();

const config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  email_user:process.env.EMAIL_USER,
  email_password:process.env.EMAIL_PASSWORD,
  jwt_secret:process.env.JWT_SECRET,
  fe_url:process.env.FE_URL,
  firebase_apikey:process.env.FIREBASE_APIKEY
};

export default config;
