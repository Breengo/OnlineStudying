import * as dotenv from "dotenv";

dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server started on port ${process.env.PORT}`);
    mongoose.set("strictQuery", false);
    mongoose
      .connect(
        "mongodb+srv://admin:pass1234@cluster0.isujiho.mongodb.net/sdo?retryWrites=true&w=majority"
      )
      .then(() => console.log("DB connected"))
      .catch((err: any) => console.log(err));
  } catch (error) {
    console.log(error);
  }
});
