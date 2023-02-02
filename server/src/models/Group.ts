import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  groupNumber: {
    type: Number,
    required: true,
  },
});

export { GroupSchema };
export default mongoose.model("Group", GroupSchema);
