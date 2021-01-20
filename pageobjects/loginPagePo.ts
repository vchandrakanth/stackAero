import { browser, element, by } from 'protractor';
const protractorHelper = require("protractor-helper");

export class LoginPage {
    userName = element(by.id('username'));
    passWD = element(by.id('password'));
    tenant = element(by.id('tenant'));
    signInButton = element(by.xpath('//button[@type="submit"]'));
    helpGuideMenu = element(by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[1]/a'));

    //Methods for Operation
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
       await this.signInButton.click();
    }

    async login(user: any,pass: any,tenant: any){
   
        await this.setName(user);
        await this.setpassWD(pass);
        await this.settenant(tenant);
        browser.sleep(5000);
        await this.clickButton();
        browser.sleep(10000);
        
    }

    async verifyPageTitle() {
      
        // return browser.getTitle();
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
