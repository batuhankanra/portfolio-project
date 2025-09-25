import { Router } from "express";
import { BlogController } from "../controller/blog.Controller";
import { authenticateJWT } from "../lib/Strategy";
import { authorizeRole } from "../lib/authRole";


const router =Router()


router.get("/",authenticateJWT,authorizeRole("user"),BlogController.get)
router.get("/:id",authenticateJWT,authorizeRole("user"),BlogController.getOne)
router.post("/",authenticateJWT,authorizeRole("user"),BlogController.create)
router.put("/:id",authenticateJWT,authorizeRole("user"),BlogController.update)
router.delete("/:id",authenticateJWT,authorizeRole("user"),BlogController.delete)

export default router