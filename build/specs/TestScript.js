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
const loginPagePo_1 = require("../pageobjects/loginPagePo");
const menuPagePo_1 = require("../pageobjects/menuPagePo");
let utils = require("../utils/utils");
let propdata = require('../conf/properties');
describe('stackaero excercise ', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var originalTimeout;
        beforeEach(function () {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
        });
        it('Step 1: open the brower and login', function () {
            return __awaiter(this, void 0, void 0, function* () {
                //Open the Url
                yield utils.goToMainPage();
                //Login
                let loginPage = new loginPagePo_1.LoginPage();
                yield loginPage.login(propdata.userName, propdata.passWord, propdata.tenant);
                // console.log("the browser title is "+loginPage.getPageTitle());
                // expect(loginPage.getPageTitle()).toMatch("zoetisadm");
                loginPage.verifyPageTitle();
            });
        });
        it('Step 2: Verify the Help Guide Menu', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let menuPage = new menuPagePo_1.MenuPage();
                yield menuPage.clickhelpGuideMenu();
                menuPage.verifyhelpGuidePageTitle();
            });
        });
        it('Step 3: Verify the Home Menu', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let menuPage = new menuPagePo_1.MenuPage();
                yield menuPage.clickhomeMenu();
                menuPage.verifyhomePageTitle();
            });
        });
        it('Step 4: Verify the Social Menu', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let menuPage = new menuPagePo_1.MenuPage();
                yield menuPage.clicksocialMenu();
                // menuPage.verifyhelpGuideTitle();
            });
        });
        afterEach(function () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
});
