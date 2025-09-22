import { Response,Request } from "express"
import { users } from "../services/users.service"


export class UserController{
    static async register(req:Request,res:Response){
        try{
            const {name,email,password}=req.body
        }catch(err){
            console.log("register_error:",err)
            res.status(500).json({msg:"error"})
        }
    }
    

    static async getUser(req:Request,res:Response){
        try{
            const fieldsParam=req.query.fields
            const fields=fieldsParam ? String(fieldsParam).split(",").map(f=>f.trim()) : undefined
            const result = await users.getUsers(fields)
            res.status(200).json(result)
            return
        }catch(err){
            console.log("getUser:",err)
            res.status(500).json({msg:"error"})
        }
    }
}