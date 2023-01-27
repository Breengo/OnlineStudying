import Router from "express";
import UserController from "../controllers/userController.js";
import authMidlleware from "../middlewares/authMidlleware.js";
import { registerValidation } from "../validations/registerValidation.js";

const router = Router();

router.post("/create", registerValidation, UserController.create);
router.post("/login", UserController.login);
router.get("/auth", authMidlleware, UserController.auth);

export default router;
