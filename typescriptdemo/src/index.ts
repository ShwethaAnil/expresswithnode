import { GithubAppService } from "./GithubAppService";
import { User } from "./User";


let gas=new GithubAppService();
gas.getUserInfo("vanpelt",(user:User)=>{
    console.log(user);
});