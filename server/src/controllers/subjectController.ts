import { Request, Response } from "express";
import SubjectModel from "../models/Subject.js";
import UserModel from "../models/User.js";
import GroupModel from "../models/Group.js";

class SubjectController {
  async create(req: Request, res: Response) {
    try {
      let { subjectName, teachers, groups } = req.body;
      const alreadyExisted = await SubjectModel.find({ subjectName });
      if (alreadyExisted.length != 0) {
        return res.status(400).json({ message: "Subject already exist" });
      }
      for (let i = 0; i < teachers.length; i++) {
        teachers[i] = (
          await UserModel.find(
            { userName: teachers[i] },
            "role group email userName"
          )
        )[0];
      }
      for (let i = 0; i < groups.length; i++) {
        groups[i] = (await GroupModel.find({ groupNumber: groups[i] }))[0];
      }
      const doc = new SubjectModel({
        subjectName,
        teachers,
        groups,
      });

      const subject = await doc.save();
      return res.status(200).json({ succes: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const subjectList = await SubjectModel.find();
      return res.status(200).json(subjectList);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }
}

export default new SubjectController();
