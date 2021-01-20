import { browser, element, by } from 'protractor';

export class MenuPage {
    
    helpGuideMenu = element(by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[1]/a'));
    homeMenu = element(by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[2]/a'));
    helpGuideTitle = element(by.xpath('//*[@id="page-wrapper"]/div[2]/div/div[1]/div[1]/h1'));
    helpGuideServicesTab = element(by.xpath('//*[@id="page-wrapper"]/div[2]/div/div[3]/div[1]/ul/li[1]/a'));
    socialMenu = element(by.xpath('//a[@href="/#!/socialFeed" and @class="nav-height ng-scope"]'));
    homePageTitle = element(by.xpath('//a[@href="#task_execution_status_chart"'));
    socialPageTitle = element(by.xpath('//strong[text()="socialFeed"]'));
    
    async clickhelpGuideMenu() {
       await this.helpGuideMenu.click();
       console.log("clicked on Help Guide menu");
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
            console.log("clicked on Home menu");
            this.homePageTitle.getText().then(function(text1) {
            console.log("The home page title is " + text1);
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
            console.log("clicked on Social menu");
            this.socialPageTitle.getText().then(function(text) {
                console.log("The Social page title is " + text);
                });
         }
}
