import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { authorizeRole } from "../lib/authRole";
import { authenticateJWT } from "../lib/Strategy";

const router=Router()

router.get("/",authenticateJWT,authorizeRole("user"),UserController.getUser)
router.get("/me",authenticateJWT,UserController.me)
router.get("/:id",authenticateJWT,authorizeRole("user"),UserController.getOneUser)
router.put("/:id",authenticateJWT,authorizeRole("user"),UserController.updateUser)
router.post("/register",UserController.register)
router.post("/login",UserController.login)
router.post("logout",authenticateJWT,UserController.logout)

export default router