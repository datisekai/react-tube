import { Router } from "express";
import AuthController from "../controllers/Auth.controller";
import verifyToken from "../middleware";

const router = Router()

router.post('/register', AuthController.register)
router.post('/login-social', AuthController.loginSocial)
router.get('/get-my-info', verifyToken,AuthController.getMyInfo)
router.post('/verify-email',AuthController.verifyEmail)
router.post('/login', AuthController.login)

export default router