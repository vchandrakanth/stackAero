import { browser, ExpectedConditions,element,by} from 'protractor';
import { async } from 'q';
let prop1 = require('../conf/properties');

export  async function goToMainPage( )  {
    browser.ignoreSynchronization=true;
    await browser.get(prop1.qaUrl);
    await browser.sleep(10000);
    console.log(prop1.qaUrl);    
}

export async function  getRandomNum (min, max){
    return parseInt(Math.random() * (max - min) + min);
};

public async waitUntilClicked(elem: ElementFinder): Promise<{ }> {
    await this.waitForElementToBeClickable(elem);
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        elem.click().then(() => {
          clearInterval(interval);
          resolve();
        }, (err) => {
          this.log('waiting for element to be clicked...');
        });
      }, 500);
    });
  }

