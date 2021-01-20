// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
import { browser, element, by } from 'protractor';
// const protractorHelper = require("protractor-helper");

export class MenuPage {
    
    helpGuideMenu = element(by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[1]/a'));
    homeMenu = element(by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[2]/a'));
    helpGuideTitle = element(by.xpath('//*[@id="page-wrapper"]/div[2]/div/div[1]/div[1]/h1'));
    helpGuideServicesTab = element(by.xpath('//*[@id="page-wrapper"]/div[2]/div/div[3]/div[1]/ul/li[1]/a'));
    socialMenu = element(by.xpath('//a[@href="/#!/socialFeed" and @class="nav-height ng-scope"]'));
    homePageTitle = element(by.xpath('//a[@href="#task_execution_status_chart"'));
    socialPageTitle = element(by.xpath('//strong[text()="socialFeed"]'));

    //Methods for Operation
    
    async clickhelpGuideMenu() {
        browser.sleep(10000);
       await this.helpGuideMenu.click();
       browser.sleep(100000);
       console.log("clicked on Help Guide menu");
       browser.sleep(100000);
      } 

        async verifyhelpGuidePageTitle() {
               var helpGuideTitletxt =  this.helpGuideTitle.getText().then(function(text1){
                console.log("The help guide Title is " + text1);
                if (text1 === 'StackAero Documentation'){
                    console.log("Help Guide Page title is matched");
                }else{
                    console.log("Help Guide Page title mismatched");
                }
            });
        }
        
        async clickhomeMenu() {
            await this.homeMenu.click();
            browser.sleep(100000);
            console.log("clicked on Home menu");
            browser.sleep(100000);
            this.homePageTitle.getText().then(function(text1) {
            console.log("The home page title is " + text1);
            browser.sleep(100000);
                });
         
            }

            async verifyhomePageTitle() {
                var homePageTitletxt =  this.homePageTitle.getText().then(function(text2){
                 console.log("The help guide Title is " + text2);
                 if (text2 === 'Activity Chart'){
                     console.log("Home Page title is matched");
                 }else{
                     console.log("Home Page title mismatched");
                 }
             });
         }
         
         async clicksocialMenu() {
            await this.socialMenu.click();
            browser.sleep(100000);
            console.log("clicked on Social menu");
            browser.sleep(100000);
            this.socialPageTitle.getText().then(function(text) {
                console.log("The Social page title is " + text);
                browser.sleep(100000);
                });
         
}

}