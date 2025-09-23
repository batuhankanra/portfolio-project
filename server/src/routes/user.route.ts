import { Router } from "express";
import { UserController } from "../controller/user.controller";
import passport from "passport";
import { authorizeRole } from "../lib/authRole";
import { authenticateJWT } from "../lib/Strategy";

const router=Router()

router.get("/",authenticateJWT,authorizeRole("admin"),UserController.getUser)
router.post("/register",UserController.register)
router.post("/login",UserController.login)

export default router