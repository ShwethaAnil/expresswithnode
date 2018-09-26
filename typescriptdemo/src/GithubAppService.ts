import { User } from "./User";
import * as request from 'request';

export class GithubAppService{
    getUserInfo(userName:string,cb:(user:User)=>any){
        let options:any={
            headers:{
                'User-Agent':'request'
            },
            json:true
        }
        request.get("https://api.github.com/users/"+userName, options,
    (error:any, response:any,body:any)=>{
        let user=new User(body);
        cb(user);
      // console.log(response);
    })
    }
}