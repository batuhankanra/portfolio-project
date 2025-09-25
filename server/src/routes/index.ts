import { Router } from "express";
import user from "./user.route"
import blog from "./blog.route"
import contact from "./contacts.route"

export const router=Router()


router.use("/user",user)
router.use("/blog",blog)
router.use("/contact",contact)