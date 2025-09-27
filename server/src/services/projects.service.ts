import { ProjectsProps } from "../types";
import { BaseServices } from "./query"; 

 class Service extends BaseServices<ProjectsProps> {
    constructor() {
        super("projects");
    }

    public async getProjects(): Promise<ProjectsProps[]> {
        return this.getAll();
    }

    public async getIdOne(id: number): Promise<ProjectsProps | null> {
        return this.getOne("id",id);
    }

    public async createProject(data: Partial<ProjectsProps>): Promise<ProjectsProps> {
        return this.create(data);
    }

    public async updateProject(id: number, data: Partial<ProjectsProps>): Promise<ProjectsProps | null> {
        return this.update(id, data);
    }

    public async deleteProject(id: number): Promise<boolean> {
        return this.delete(id);
    }
}

export const projects = new Service();
