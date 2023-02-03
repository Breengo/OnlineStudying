import { Request, Response } from "express";
import SubjectModel from "../models/Subject.js";
import UserModel from "../models/User.js";
import GroupModel from "../models/Group.js";

class SubjectController {
  async create(req: Request, res: Response) {
    try {
      let { subjectName, teacher, groups } = req.body;
      const alreadyExisted = await SubjectModel.find({ subjectName });
      if (alreadyExisted.length != 0) {
        return res.status(400).json({ message: "Subject already exist" });
      }

      teacher = await UserModel.findOne(
        { userName: teacher },
        "role group email userName"
      );

      for (let i = 0; i < groups.length; i++) {
        groups[i] = (await GroupModel.find({ groupNumber: groups[i] }))[0];
      }
      const doc = new SubjectModel({
        subjectName,
        teacher,
        groups,
        headerText: "Description of subject",
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

  async getByID(req: Request, res: Response) {
    try {
      const { subjectID } = req.query;
      const subjectInfo = await SubjectModel.findOne({ _id: subjectID });
      return res.status(200).json(subjectInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }
}

export default new SubjectController();
