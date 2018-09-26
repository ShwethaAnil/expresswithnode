import {Person1} from './demo'


export class Employee extends Person1{
    constructor(firstName,lastName,age){
     super(firstName,lastName,age);
    }
   public getDe(){
      return super.getDetails();
   }

}



