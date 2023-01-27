import { ICheckAuthRequest } from "./../middlewares/authMidlleware.js";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
      }
      const { password, email, userName } = req.body;
      const alreadyExisted = await UserModel.find({ email });
      if (alreadyExisted.length != 0) {
        return res.status(400).json({ message: "Email already taken" });
      }
      const passwordHash = await bcrypt.hash(password, 6);
      const doc = new UserModel({
        email,
        password: passwordHash,
        userName: userName,
      });

      const user = await doc.save();
      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.SECRET_KEY as string
      );
      return res.status(200).json(token);
    } catch (error) {
      console.log(error);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.find({ email });
      if (user.length === 0) {
        return res.status(404).json({ message: "No user with such email" });
      }
      const rightPassword = await bcrypt.compare(password, user[0].password);
      if (!rightPassword) {
        return res.status(404).json({ message: "Incorrect password" });
      }
      const token = jwt.sign(
        { _id: user[0]._id },
        process.env.SECRET_KEY as string
      );
      return res.status(200).json(token);
    } catch (error) {
      console.log(error);
    }
  }

  async auth(req: ICheckAuthRequest, res: Response) {
    return res.status(200).json(req.userId);
  }
}

export default new UserController();
