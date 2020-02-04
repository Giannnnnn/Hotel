export class Customer {
    id:number;
    name:string;
    tel:string;
    email:string;
    cpf:string;
    status:string;
    

    constructor( name?: string,email?:string, tel?: string,cpf?:string,status?:string) {
        this.name = name;
        this.email=email;
        this.tel = tel;
        this.cpf=cpf;
        this.status=status;
    }
    
}