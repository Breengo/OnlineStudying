import Router from "express";
import userRouter from "./userRouter.js";
import groupRouter from "./groupRouter.js";
const router = Router();

router.use("/user", userRouter);
router.use("/group", groupRouter);

export default router;
