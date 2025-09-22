import {  UserProps } from "../types";
import { BaseServices } from "./query";

export class UserServices extends BaseServices<UserProps> {
    private readonly allowedColums =new Set([
        "id",
        "name",
        "email",
        "password_hash",
        "role",
        "created_at",
        "updated_at"
    ])
    constructor() {
        super("users");
    }

    public async getBlogs(): Promise<UserProps[]> {
        return this.getAll();
    }
    public async getUsers(columns?:string[]){
        let safeCols: string[] | undefined
        if(columns && columns.length >0){
            safeCols=columns.filter(c=>this.allowedColums.has(c))
            if(safeCols.length===0){
                throw new Error("no volid columns provided")
            }
        }
        return this.getData
    }
    public async getOneBlog(id: number): Promise<UserProps | null> {
        return null
    }

    public async addBlog(blog: Partial<UserProps>): Promise<UserProps> {
        return this.create(blog);
    }

    public async updateBlog(id: number, blog: Partial<UserProps>): Promise<UserProps | null> {
        return this.update(id, blog);
    }

    public async deleteBlog(id: number): Promise<boolean> {
        return this.delete(id);
    }
}

export const users = new UserServices();
