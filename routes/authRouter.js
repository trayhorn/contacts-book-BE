import express from "express";
import { ctrl } from "../controllers/authControllers.js";
import { validateBody } from "../middlewars/validateBody.js";
import { registerSchema, loginSchema } from "../models/user.js";
import { authenticate } from "../middlewars/authenticate.js";

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get('/current', authenticate, ctrl.current);

export default router;