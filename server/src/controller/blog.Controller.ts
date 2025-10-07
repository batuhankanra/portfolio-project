import { Request,Response} from "express";
import { blogs } from "../services/blog.service";
import { Slug } from "../lib/slug";
import path from "path";
import fs from "fs"


export class BlogController{
    public static async get(req:Request,res:Response){
        try{
            const data = await blogs.getBlogs()
          
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
            return
        }
    }
    public static async getOne(req:Request,res:Response){
         try{
            const {id} =req.params
            if(!id){
                res.status(404).json({msg:"blog isn't found"})
                return
            }
            const data = await blogs.getIdOne(Number(id))
            if(!data){
                res.status(404).json({msg:"blog isn't found"})
                return
            }
          
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
            return
        }
    }
    public static async create(req:Request,res:Response){
        try{
            const {title,content}=req.body
            const file=req.file ? `/uploads/${req.file.filename}` : null
            if(!title || !content || !file || !req.user){
                res.status(400).json({msg:"Title and content required"})
                return
            }
            const user:any=req.user
            const newSlug=Slug(title)
            const newBlog=await blogs.addBlog({title,content,cover_image:file,slug:newSlug,user_id:user.id})
            res.status(201).json(newBlog)
            return

        }catch(err){
            console.log(err)
            res.status(500).json({msg:"server problem"})
            return
        }
    }
    public static async update(req:Request,res:Response){
        try{
            const {id}=req.params
            const {title,content}=req.body
            const existingUser=await blogs.getIdOne(Number(id))
            if(!existingUser){
                res.status(404).json( {msg:"Blog not found"})
                return
            }
            const file = req.file ? `/uploads/${req.file.filename}` : null;
            const slug=Slug(title)
            const updatedBlog= await blogs.updateBlog(Number(id),{title,content,cover_image:file,slug})
            if(!updatedBlog){
                 res.status(404).json({ msg: "Blog not found" });
                 return
            }
            if(file && existingUser?.cover_image){
                const oldPath=path.join(__dirname,"../",existingUser.cover_image)
                
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
                res.status(404).json({msg:"Blog not found"})
                return
            }
            const existingUser=await blogs.getIdOne(Number(id))
            if(!existingUser){
                res.status(404).json({msg:"Blog not found"})
                return
            }

            const deleted=await blogs.deleteBlog(Number(id))
            
             if(deleted && existingUser?.cover_image){
                const oldPath=path.join(__dirname,"../public",existingUser.cover_image)
               
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
    
}
