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
        moduleList: [],
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

  async updateHeaderText(req: Request, res: Response) {
    try {
      const { headerText, _id } = req.body;
      const subjectInfo = await SubjectModel.updateOne({ _id }, { headerText });
      return res.status(200).json(headerText);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }

  async createModule(req: Request, res: Response) {
    try {
      const { moduleName, _id } = req.body;
      const subject = await SubjectModel.findOne({ _id });
      subject?.moduleList.push({ moduleName, itemList: [] });
      subject?.save();
      return res.status(200).json(moduleName);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }

  async deleteModule(req: Request, res: Response) {
    try {
      const { moduleID, _id } = req.body;
      let subject = await SubjectModel.findOneAndUpdate(
        { _id },
        {
          $pull: {
            moduleList: {
              _id: moduleID,
            },
          },
        }
      );
      return res.status(200).json({ message: "succes" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }

  async updateModuleName(req: Request, res: Response) {
    try {
      const { moduleName, _id, moduleID } = req.body;
      const subject = await SubjectModel.findOneAndUpdate(
        { _id, "moduleList._id": moduleID },
        {
          $set: {
            moduleList: {
              moduleName,
            },
          },
        }
      );
      return res.status(200).json(subject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }
}

export default new SubjectController();
