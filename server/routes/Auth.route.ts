import { Router } from "express";
import AuthController from "../controllers/Auth.controller";

const router = Router()

router.post('/register', AuthController.register)

export default router