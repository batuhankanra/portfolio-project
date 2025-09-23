import { Response,Request } from "express"
import { users } from "../services/users.service"
import bcryptjs  from "bcryptjs"
import jwt from "jsonwebtoken"
import { config } from "../config"

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
 const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
export class UserController{
    public static async register(req:Request,res:Response):Promise<void>{
        try{
            const {name,email,password}=req.body
            if(!name || !email || !password){
                res.status(400).json({msg:"bad request , cannot be empty"})
                return
            }
            if(!emailRegex.test(email)){
                res.status(400).json({msg:"bad request , email is not valid"})
                return
            }
            if(!passwordRegex.test(password)){
                res.status(400).json({msg:"bad request,password is not vaild"})
                return
            }
            const existingUser=await users.getEmail(email)
            if(existingUser){
                res.status(400).json({msg:"There is such an email"})
                return
            }
            
            const passwordHash=await bcryptjs.hash(password,10)
            const create=await users.addUser({name,email,password_hash:passwordHash})

            if(!create){
                res.status(404).json({msg:"db hatalı"})
                return
            }
            res.status(201).json({msg:"success"})
            
        }catch(err){
            console.log("register_error:",err)
            res.status(500).json({msg:"error"})
        }
    }
    public static async login(req:Request,res:Response){
        try{
            const {email,password}=req.body
            if(!email || !password){
                res.status(400).json({msg:"bad request , email is not valid"})
                return
            }
             if(!emailRegex.test(email)){
                res.status(400).json({msg:"bad request , email is not valid"})
                return
            }
            const user = await users.getEmail(email)
            if(!user){
                res.status(401).json({msg:"Email or password is incorrect"})
                return
            }
            const existpassword =await bcryptjs.compare(password,user.password_hash)
            if(!existpassword){
                res.status(401).json({msg:"Email or password is incorrect"})
                return
            }
            const token = jwt.sign({id:user.id},config.JWT_SECRET,{expiresIn:"1h"})
            res.status(200).json({msg:"success",token})
            return

        }catch (err){
            console.log(err)
            res.status(500).json({msg:"error"})

        }
    }
    

    public static async getUser(req:Request,res:Response){
        try{
            const fieldsParam=req.query.fields
            const fields=fieldsParam ? String(fieldsParam).split(",").map(f=>f.trim()) : undefined
            const result = await users.getAllUser()
            res.status(200).json(result)
            return
        }catch(err){
            console.log("getUser:",err)
            res.status(500).json({msg:"error"})
        }
    }
    public static async getOneUser(req:Request,res:Response){

    }
}