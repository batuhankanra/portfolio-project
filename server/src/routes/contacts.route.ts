import { Router } from "express";
import { BlogController } from "../controller/blog.Controller";
import { authenticateJWT } from "../lib/Strategy";
import { authorizeRole } from "../lib/authRole";
import { ContactsController } from "../controller/contacts.controller";


const router =Router()


router.get("/",authenticateJWT,authorizeRole("user"),ContactsController.get)
router.get("/:id",authenticateJWT,authorizeRole("user"),ContactsController.getOne)
router.post("/",authenticateJWT,authorizeRole("user"),ContactsController.create)
router.put("/:id",authenticateJWT,authorizeRole("user"),ContactsController.update)
router.delete("/:id",authenticateJWT,authorizeRole("user"),ContactsController.delete)

export default router