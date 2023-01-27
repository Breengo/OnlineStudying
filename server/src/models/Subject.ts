import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
