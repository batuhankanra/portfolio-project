import { Router } from "express";
import { UserController } from "../controller/user.controller";

const router=Router()

router.get("/",UserController.getUser)
router.post("/register",UserController.register)

export default router