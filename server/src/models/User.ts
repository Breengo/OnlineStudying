import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
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

export { UserSchema };
export default mongoose.model("User", UserSchema);
