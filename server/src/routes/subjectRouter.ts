import Router from "express";
import SubjectController from "../controllers/subjectController.js";

const router = Router();

router.post("/create", SubjectController.create);
router.get("/getAll", SubjectController.getAll);
router.get("/getByID", SubjectController.getByID);
router.put("/updateHeader", SubjectController.updateHeaderText);
router.post("/createModule", SubjectController.createModule);
router.put("/deleteModule", SubjectController.deleteModule);
router.put("/updateModulename", SubjectController.updateModuleName);

export default router;
