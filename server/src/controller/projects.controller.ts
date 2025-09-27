import { Request,Response } from "express";
import { projects } from "../services/projects.service";
import { Slug } from "../lib/slug";
import path from "path";
import fs from "fs"

export class ProjectController{
    public static async getAll(req:Request,res:Response){
        try{
            const data=await projects.getProjects()
            res.status(200).json(data)
            return
        }catch{
            res.status(500).json({msg:"server problem"})
            return
        }
    }
    public static async getOne(req:Request,res:Response){
        try{
            const {id} =req.params
            const data =await projects.getIdOne(Number(id))
            if(!data){
                res.status(404).json({msg:"Project not found"})
                return
            }
            res.status(200).json(data)
            return


        }catch{
            res.status(500).json({msg:"server problem"})
            return
        }
    }
    public static async create(req:Request,res:Response){
        try{    
            const {title,description,repo_link,techStack}=req.body
            const file =req.file ?  `/public/uploads/${req.file.filename}`: null

            if(!title || !description || !repo_link || !techStack){
                res.status(400).json({msg:"these cannot be empty"})
                if(file){
                    const oldPath=path.join(__dirname,"../",file)   
                    if(fs.existsSync(oldPath)){
                        fs.unlinkSync(oldPath)
                    }
                }
                return
            }
            if(!file){
                res.status(400).json({msg:"photo could not be uploaded"})
                
                return
            }
            let stack:string[]
            try{
                stack=JSON.parse(techStack)
                if(!Array.isArray(stack)) {
                    res.status(400).json({msg:"request is incorrect"})
                    return
                }
            }catch{
                res.status(400).json({msg:"request is incorrect"})
                if(file){
                    const oldPath=path.join(__dirname,"../",file)   
                    if(fs.existsSync(oldPath)){
                        fs.unlinkSync(oldPath)
                    }
                }
                return
            }
            const slug=Slug(title)
            const user:any=req.user
            const newProject=await projects.createProject({title,description,link:slug,repo_link,tech_stack:stack,image_link:file,user_id:user.id})
            res.status(201).json({msg:"success",newProject})

        }catch{
            res.status(500).json({msg:"server problem"})
            return
        }
    }
    public static async update(req:Request,res:Response){
        try{
            const {id}=req.params
            const {title,description,repo_link,techStack}=req.body
            if(!id){
                res.status(400).json({msg:"Project not found"})
                return
            }
            const existsProject=await projects.getIdOne(Number(id))
           
            if(!existsProject){
                res.status(400).json({msg:"Project not found"})
                return
            }
            const file = req.file ? `/public/uploads/${req.file.filename}` : existsProject.image_link;
            const slug=Slug(title)
            let stack:string[]
            try{
                stack=JSON.parse(techStack)
                if(!Array.isArray(stack)) {
                    res.status(400).json({msg:"request is incorrect"})
                    return
                }
            }catch{
                res.status(400).json({msg:"request is incorrect"})
                return
            }
            const updateProject= await projects.updateProject(Number(id),{title,description,link:slug,repo_link,tech_stack:stack,image_link:file})
            if(!updateProject){
                res.status(404).json({ msg: "Project not found" });
                return
                
            }
            if(file && existsProject?.image_link){
                const oldPath=path.join(__dirname,"../",existsProject.image_link)
                            
                if(fs.existsSync(oldPath)){
                    fs.unlinkSync(oldPath)
                }
            }
            res.status(200).json({msg:"success"})
            

        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
            return
        }
    }
    public static async delete(req:Request,res:Response){
        try{
            const {id}=req.params
            if(!id){
                res.status(400).json({msg:"Project not found"})
                return
            }
            const existsProject=await projects.deleteProject(Number(id))
            if(!existsProject){
                res.status(400).json({msg:"Project not found"})
                return
            }
            res.status(200).json({msg:"success"})
           

        }catch{
            res.status(500).json({msg:"server problem"})
            return
        }
    }
}