

export class Users{
    public _id!:string;
    public first_name: string;
    public last_name : string;
    public phone_number : number;
  
    constructor(first_name: string, last_name: string, phone_number: number){
    
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
       
    }
}