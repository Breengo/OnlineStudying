import Router from "express";
import GroupController from "../controllers/groupController.js";

const router = Router();

router.post("/create", GroupController.create);
router.get("/getAll", GroupController.getAll);

export default router;
