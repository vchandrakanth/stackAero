"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let prop1 = require('../conf/properties');
function goToMainPage() {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.get(prop1.qaUrl);
        yield protractor_1.browser.sleep(10000);
        console.log(prop1.qaUrl);
    });
}
exports.goToMainPage = goToMainPage;
function getRandomNum(min, max) {
    return __awaiter(this, void 0, void 0, function* () {
        return parseInt(Math.random() * (max - min) + min);
    });
}
exports.getRandomNum = getRandomNum;
;
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
