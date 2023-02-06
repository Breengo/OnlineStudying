import { Request, Response } from "express";
import SubjectModel from "../models/Subject.js";

class SubjectController {
  async createModuleItem(req: Request, res: Response) {
    try {
      const { itemType, itemName, moduleID, _id } = req.body;

      const subject = await SubjectModel.findOne({
        _id,
      });
      const moduleIndex = subject?.moduleList.findIndex(
        (item) => item.id === moduleID
      );
      if (moduleIndex != -1 && moduleIndex != undefined) {
        subject?.moduleList[moduleIndex].itemList.push({
          itemType,
          itemName,
          number: subject?.moduleList[moduleIndex].itemList.length,
        });
      }
      subject?.save();
      return res.status(200).json(subject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal error" });
    }
  }
}

export default new SubjectController();
