import { browser, element, by } from 'protractor';
import { waitForElementToBeClickable } from '../utils/utils';
const protractorHelper = require("protractor-helper");

export class LoginPage {
    userName = element(by.id('username'));
    passWD = element(by.id('password'));
    tenant = element(by.id('tenant'));
    signInButton = element(by.xpath('//button[@type="submit"]'));
    helpGuideMenu = element(by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[1]/a'));

    async setName(name: string) {
           
     await  this.userName.sendKeys(name);
    }
    async setpassWD(name: string) {
        await this.passWD.sendKeys(name);
    }
    async settenant(name: string) {
        await this.tenant.sendKeys(name);
    }

    async clickButton() {
        await this.waitForElementToBeClickable(signInButton);
    }

    async login(user: any,pass: any,tenant: any){
        await this.setName(user);
        await this.setpassWD(pass);
        await this.settenant(tenant);
        await this.waitForElementToBeClickable(clickButton);
    }

    async verifyPageTitle() {
        var browserTitle = browser.getTitle().then(function(webpageTitle){
            console.log("The title of the webpage is " + webpageTitle);
            if (webpageTitle === 'StackLynx - Sketch'){
                console.log("Page title is matched");
            }else{
                console.log("Page title mismatched");
            }
        })       
      }
}
