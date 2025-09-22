import { BlogProps } from "../types";
import { BaseServices } from "./query"; 

export class BlogServices extends BaseServices<BlogProps> {
    constructor() {
        super("projects");
    }

    public async getBlogs(): Promise<BlogProps[]> {
        return this.getAll();
    }

    public async getOneBlog(id: number): Promise<BlogProps | null> {
        return this.getOne(id);
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
