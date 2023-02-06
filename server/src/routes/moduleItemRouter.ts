import Router from "express";
import moduleItemController from "../controllers/moduleItemController.js";

const router = Router();

router.post("/createModuleItem", moduleItemController.createModuleItem);

export default router;
