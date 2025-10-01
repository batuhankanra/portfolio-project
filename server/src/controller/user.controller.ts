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
            res.cookie("login",token ,{httpOnly:true,secure:config.NODE_ENV,sameSite:"lax"})
            res.status(200).json({msg:"success"})
            return

        }catch (err){
            console.log(err)
            res.status(500).json({msg:"error"})

        }
    }
    public static async logout(req:Request,res:Response){
        res.clearCookie("login",{httpOnly:true,secure:config.NODE_ENV,sameSite:"strict"})
        res.status(200).json({msg:"success"})
    }
    public static async me(req:Request,res:Response){
        const user = req.user as any; // Passport ile doluyor
        if (!user) return res.status(401).json({ msg: "Unauthorized" });
        res.status(200).json({name:user.name,email:user.email})
        return


    }
    

    public static async getUser(req:Request,res:Response){
        try{
            const result = await users.getAllUser()
            res.status(200).json(result)
            return
        }catch(err){
            console.log("getUser:",err)
            res.status(500).json({msg:"error"})
        }
    }
    public static async getOneUser(req:Request,res:Response){
        try{
            const {id} =req.params
            const result = await users.getId(Number(id))
            res.status(200).json(result)
            return
        }catch(err){
            console.log("getUser:",err)
            res.status(500).json({msg:"error"})
        }
    }
    public static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, password,oldPassword } = req.body;

      const existingUser = await users.getId(Number(id));
      if (!existingUser) {
        res.status(404).json({ msg: "Kullanıcı bulunamadı" })
        return 
      }
      const pasCompare=await bcryptjs.compare(oldPassword,existingUser.password_hash)
      console.log(pasCompare,oldPassword,password)
      if(!pasCompare){
        res.status(400).json({msg:"The password is not the same"})
        return
      }
      let hashedPassword = existingUser.password_hash; 
      if (password) {
        if (password.length < 6) {
           res.status(400).json({ msg: "Şifre en az 6 karakter olmalı" })
           return
        }
        hashedPassword = await bcryptjs.hash(password, 10);
      }

      const updatedUser = await users.updateUser(Number(id), {
        name: name || existingUser.name,
        email: email || existingUser.email,
        password_hash: hashedPassword,
      });

       res.status(200).json({msg: "Kullanıcı güncellendi ✅",user: updatedUser});
       return
    } catch (err) {
      console.error("updateUser error:", err);
      return res.status(500).json({ msg: "Sunucu hatası" });
    }
  }
}