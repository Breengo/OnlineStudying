import mongoose from "mongoose";
import { GroupSchema } from "./Group.js";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    group: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const SubjectSchema = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
      unique: true,
    },
    teachers: [UserSchema],
    groups: [GroupSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Subject", SubjectSchema);
