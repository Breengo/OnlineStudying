import Router from "express";
import SubjectController from "../controllers/subjectController.js";

const router = Router();

router.post("/create", SubjectController.create);
router.get("/getAll", SubjectController.getAll);

export default router;
