import { Request,Response } from "express";

export class ContactsController{
    public static async get(req:Request,res:Response){
        try{

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
            
        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
        }
    }
}