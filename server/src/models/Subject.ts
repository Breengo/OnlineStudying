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

const ModuleItemSchema = new mongoose.Schema({
  itemType: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    require: true,
  },
});

const ModuleSchema = new mongoose.Schema({
  moduleName: {
    type: String,
    required: true,
  },
  itemList: [ModuleItemSchema],
});

const SubjectSchema = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
      unique: true,
    },
    teacher: UserSchema,
    groups: [GroupSchema],
    moduleList: [ModuleSchema],
    headerText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Subject", SubjectSchema);
