export class User{
    login: string;
    fullname: string;
    repoCount:string;
    followerCount:string;

    constructor(userResponse:any){
        this.login=userResponse.login;
        this.fullname=userResponse.name;
        this.repoCount=userResponse.public_repos;
        this.followerCount=userResponse.followers;
    }
}