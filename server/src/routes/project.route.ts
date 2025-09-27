import { Router } from "express";
import { ProjectController } from "../controller/projects.controller";
import { authenticateJWT } from "../lib/Strategy";
import { authorizeRole } from "../lib/authRole";
import { upload } from "../lib/multer";


const router=Router()

router.get("/",ProjectController.getAll)
router.get("/:id",ProjectController.getOne)
router.post("/",authenticateJWT,authorizeRole("user"),upload.single("image"),ProjectController.create)
router.put("/:id",authenticateJWT,authorizeRole("user"),upload.single("image"),ProjectController.update)
router.delete("/:id",ProjectController.delete)



export default router