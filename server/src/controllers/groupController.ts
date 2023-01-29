import { Request, Response } from "express";
import GroupModel from "../models/Group.js";

class GroupController {
  async create(req: Request, res: Response) {
    try {
      const { groupNumber } = req.body;
      const alreadyExisted = await GroupModel.find({ groupNumber });
      if (alreadyExisted.length != 0) {
        return res.status(400).json({ message: "Group already exist" });
      }
      const doc = new GroupModel({
        groupNumber,
      });

      const group = await doc.save();
      return res.status(200).json({ succes: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const groupList = await GroupModel.find();
      return res.status(200).json(groupList);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }
}

export default new GroupController();
