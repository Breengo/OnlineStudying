import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface ICheckAuthRequest extends Request {
  userId?: string;
}

interface JwtPayload {
  _id: string;
}

export default (req: ICheckAuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.auth as string;
  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY as string
      ) as JwtPayload;
      req.userId = decoded._id;
      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "Not authorized" });
    }
  } else {
    return res.status(403).json({ message: "Not authorized" });
  }
};
