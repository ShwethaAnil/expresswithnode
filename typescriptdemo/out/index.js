"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubAppService_1 = require("./GithubAppService");
var gas = new GithubAppService_1.GithubAppService();
gas.getUserInfo("vanpelt", function (user) {
    console.log(user);
});
