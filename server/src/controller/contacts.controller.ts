import { Request,Response } from "express";
import { contact } from "../services/contacts.service";


const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
export class ContactsController{
    public static async get(req:Request,res:Response){
        try{
            const data =await contact.getContact()
            res.status(200).json(data)

        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
        }
    }
    public static async getOne(req:Request,res:Response){
        try{
            
        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
        }
    }
    public static async create(req:Request,res:Response){
        try{
            const {name,email,message}=req.body
            if(!name || !email || !message){
                res.status(400).json({msg:"cannot be empty"})
                return
            }
            if(!emailRegex.test(email)){
                res.status(400).json({msg:"email is not correct"})
                return
            }
            const conCreate=await contact.createContact({name,email,message})
            if(!conCreate){
                res.status(400).json({msg:"bad request"})
                return
            }
            res.status(201).json({msg:"success"})
            return

        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
        }
    }
    public static async update(req:Request,res:Response){
        try{
            
        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
        }
    }
    public static async delete(req:Request,res:Response){
        try{
            const {id}=req.params
            const exists=await contact.deleteContact(Number(id))
            if(!exists){
                res.status(404).json({msg:"There is no such person"})
                return 
            }
            res.status(200).json({msg:"success"})
            return
            
        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
        }
    }
}