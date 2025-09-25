import { BlogProps } from "../types";
import { BaseServices } from "./query";

 class BlogServices extends BaseServices<BlogProps> {
    constructor() {
        super("blog");
    }

    public async getBlogs(): Promise<BlogProps[]> {
        return this.getAll();
    }

    public async getIdOne(id: number): Promise<BlogProps | null> {
        return this.getOne("id",id);
    }
    public async getName(title:string):Promise<BlogProps | null >{
        return this.getOne("title",title)
    }

    public async addBlog(blog: Partial<BlogProps>): Promise<BlogProps> {
        return this.create(blog);
    }

    public async updateBlog(id: number, blog: Partial<BlogProps>): Promise<BlogProps | null> {
        return this.update(id, blog);
    }

    public async deleteBlog(id: number): Promise<boolean> {
        return this.delete(id);
    }
}

export const blogs = new BlogServices();
