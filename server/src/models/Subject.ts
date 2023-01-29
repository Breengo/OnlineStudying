import mongoose from "mongoose";
import UserModles from "./User.js";

const SubjectSchema = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
    },
    teacher: [UserModles],
    groups: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Subject", SubjectSchema);
