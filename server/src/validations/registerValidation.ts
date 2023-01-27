import { body } from "express-validator";

export const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  body("userName").isLength({ min: 5 }),
];
