import data2 from "../testdata/testdata1.json"
import fs from "fs"
import path from "path";
import { parse } from "csv-parse/sync";
import { test } from "allure-playwright";
exports.Loginpage =
class Loginpage {

    constructor(page){
this.page = page;
this.loginLink="#login2"
this.usernameInput = '#loginusername';
this.passwordInput = '#loginpassword';
this.loginButton ='//button[normalize-space()="Log in"]';

    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html');
    }
    async login(username, password){
await this.page.locator(this.loginLink).click();

//JSON File
await this.page.locator(this.usernameInput).fill(data2.username);
await this.page.locator(this.passwordInput).fill(data2.password);
//CSV FILE
//await this.page.locator(this.usernameInput).fill();
//await this.page.locator(this.passwordInput).fill(LastName);
await this.page.locator(this.loginButton).click();

    }
}
