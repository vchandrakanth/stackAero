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
// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
const protractor_1 = require("protractor");
// const protractorHelper = require("protractor-helper");
class MenuPage {
    constructor() {
        this.helpGuideMenu = protractor_1.element(protractor_1.by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[1]/a'));
        this.homeMenu = protractor_1.element(protractor_1.by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[2]/a'));
        this.helpGuideTitle = protractor_1.element(protractor_1.by.xpath('//*[@id="page-wrapper"]/div[2]/div/div[1]/div[1]/h1'));
        this.helpGuideServicesTab = protractor_1.element(protractor_1.by.xpath('//*[@id="page-wrapper"]/div[2]/div/div[3]/div[1]/ul/li[1]/a'));
        this.socialMenu = protractor_1.element(protractor_1.by.xpath('//a[@href="/#!/socialFeed" and @class="nav-height ng-scope"]'));
        this.homePageTitle = protractor_1.element(protractor_1.by.xpath('//a[@href="#task_execution_status_chart"'));
        this.socialPageTitle = protractor_1.element(protractor_1.by.xpath('//strong[text()="socialFeed"]'));
    }
    //Methods for Operation
    clickhelpGuideMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(10000);
            yield this.helpGuideMenu.click();
            protractor_1.browser.sleep(100000);
            console.log("clicked on Help Guide menu");
            protractor_1.browser.sleep(100000);
        });
    }
    verifyhelpGuidePageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            var helpGuideTitletxt = this.helpGuideTitle.getText().then(function (text1) {
                console.log("The help guide Title is " + text1);
                if (text1 === 'StackAero Documentation') {
                    console.log("Help Guide Page title is matched");
                }
                else {
                    console.log("Help Guide Page title mismatched");
                }
            });
        });
    }
    clickhomeMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeMenu.click();
            protractor_1.browser.sleep(100000);
            console.log("clicked on Home menu");
            protractor_1.browser.sleep(100000);
            this.homePageTitle.getText().then(function (text1) {
                console.log("The home page title is " + text1);
                protractor_1.browser.sleep(100000);
            });
        });
    }
    verifyhomePageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            var homePageTitletxt = this.homePageTitle.getText().then(function (text2) {
                console.log("The help guide Title is " + text2);
                if (text2 === 'Activity Chart') {
                    console.log("Home Page title is matched");
                }
                else {
                    console.log("Home Page title mismatched");
                }
            });
        });
    }
    clicksocialMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.socialMenu.click();
            protractor_1.browser.sleep(100000);
            console.log("clicked on Social menu");
            protractor_1.browser.sleep(100000);
            this.socialPageTitle.getText().then(function (text) {
                console.log("The Social page title is " + text);
                protractor_1.browser.sleep(100000);
            });
        });
    }
}
exports.MenuPage = MenuPage;
