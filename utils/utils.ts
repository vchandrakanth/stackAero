
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
// export function writetoFile(data:any, filename:any) {
    
//          var stream = fs.createWriteStream(filename);
//             stream.write(new Buffer.from(png, 'base64'));
//             stream.end();
//     }

//    export  async function screenGrab(data:any, filename:any){
//     browser.takeScreenshot().then(function (png)
//     {
//         writetoFile(png,filename)
//     }

   
//     );
