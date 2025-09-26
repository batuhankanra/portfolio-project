import { ContactsProps } from "../types";
import { BaseServices } from "./query";

class ContactServices extends BaseServices<ContactsProps> {
    constructor() {
        super("contacts");
    }

    public async getContact(): Promise<ContactsProps[]> {
        return this.getAll();
    }

    public async getIdOne(id: number): Promise<ContactsProps | null> {
        return this.getOne("id",id);
    }
    public async getEmailOne(email: string): Promise<ContactsProps | null> {
        return this.getOne("email",email);
    }
    public async getNameOne(name: string): Promise<ContactsProps | null> {
        return this.getOne("name",name);
    }

    public async createContact(data: Partial<ContactsProps>): Promise<ContactsProps> {
        return this.create(data);
    }

    public async updateContact(id: number, data: Partial<ContactsProps>): Promise<ContactsProps | null> {
        return this.update(id, data);
    }

    public async deleteContact(id: number): Promise<boolean> {
        return this.delete(id);
    }
}

export const contact = new ContactServices();
