import { Router } from "express";
import { UserController } from "../controller/user.controller";

const router=Router()

router.get("/userAll",UserController.getUser)

export default router