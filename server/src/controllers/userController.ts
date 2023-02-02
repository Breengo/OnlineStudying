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
        return res.status(400).json({
          message: errors.array()[0].param + " " + errors.array()[0].msg,
        });
      }
      const { password, email, userName, role, group } = req.body;
      const alreadyExisted = await UserModel.find({ email });
      if (alreadyExisted.length != 0) {
        return res.status(400).json({ message: "Email already taken" });
      }
      const passwordHash = await bcrypt.hash(password, 6);
      let doc;
      if (group) {
        doc = new UserModel({
          email,
          password: passwordHash,
          userName,
          role,
          group,
        });
      } else {
        doc = new UserModel({
          email,
          password: passwordHash,
          userName,
          role,
        });
      }

      const user = await doc.save();
      return res.status(200).json({ succes: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
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
      return res.status(200).json({
        token,
        email: user[0].email,
        userName: user[0].userName,
        role: user[0].role,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async auth(req: ICheckAuthRequest, res: Response) {
    const user = await UserModel.find({ _id: req.userId });
    return res.status(200).json({
      email: user[0].email,
      userName: user[0].userName,
      role: user[0].role,
    });
  }

  async getByRole(req: Request, res: Response) {
    const { role } = req.query;
    const users = await UserModel.find({ role }, "email role  userName");
    return res.status(200).json(users);
  }
}

export default new UserController();
