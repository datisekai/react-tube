import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "User is not login !",
    });
  }

  try {

    const decoded = jwt.verify(token.replace(/"/g, ''), process.env.JWT_SECRET as string) as {
      id: string;
    };
    req.body.id = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token not found !",
    });
  }
};

export default verifyToken;