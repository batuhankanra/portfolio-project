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
        this.selectableFields='"id","name","email","role","created_at","updated_at"'
    }

    public async getAllUser(): Promise<UserProps[]> {
        return this.getAll();
    }
   
    public async getEmail(email: string): Promise<UserProps | null> {
        return this.getOne("email",email)
    }

    public async addUser(data: Partial<UserProps>): Promise<UserProps> {
        return this.create(data);
    }

    public async updateUser(id: number, blog: Partial<UserProps>): Promise<UserProps | null> {
        return this.update(id, blog);
    }

    public async deleteUser(id: number): Promise<boolean> {
        return this.delete(id);
    }
}

export const users = new UserServices();
