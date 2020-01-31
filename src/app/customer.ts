import { stringify } from "querystring";

export class Customer {
    id:number;
    name:string;
    tel:string;
    email:string;
    cpf:string;
    status:string;
    

    constructor(id: number, name?: string,email?:string, tel?: string,cpf?:string,status?:string) {
        this.id = id;
        this.name = name;
        this.tel = tel;
        this.email=email;
        this.cpf=cpf;
        this.status=status;
    }
    
}