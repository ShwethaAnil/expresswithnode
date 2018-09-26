export class Person1{
    
    constructor(public firstName:string, protected lastName:string, 
        protected age:number){
    }
    getFullName(){
        return this.firstName+" "+this.lastName;
    }
    getDetails(){
        return this.firstName+" "+this.lastName+" "+this.age;
    }
}

