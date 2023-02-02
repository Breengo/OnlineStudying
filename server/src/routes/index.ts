import Router from "express";
import userRouter from "./userRouter.js";
import groupRouter from "./groupRouter.js";
import subjectRouter from "./subjectRouter.js";
const router = Router();

router.use("/user", userRouter);
router.use("/group", groupRouter);
router.use("/subject", subjectRouter);

export default router;
