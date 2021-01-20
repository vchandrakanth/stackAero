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
const protractorHelper = require("protractor-helper");
class LoginPage {
    constructor() {
        this.userName = protractor_1.element(protractor_1.by.id('username'));
        this.passWD = protractor_1.element(protractor_1.by.id('password'));
        this.tenant = protractor_1.element(protractor_1.by.id('tenant'));
        this.signInButton = protractor_1.element(protractor_1.by.xpath('//button[@type="submit"]'));
        this.helpGuideMenu = protractor_1.element(protractor_1.by.xpath('//*[@id="header"]/div/div/nav/div/ul/li[1]/a'));
    }
    //Methods for Operation
    setName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userName.sendKeys(name);
        });
    }
    setpassWD(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.passWD.sendKeys(name);
        });
    }
    settenant(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tenant.sendKeys(name);
        });
    }
    clickButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signInButton.click();
        });
    }
    login(user, pass, tenant) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setName(user);
            yield this.setpassWD(pass);
            yield this.settenant(tenant);
            protractor_1.browser.sleep(5000);
            yield this.clickButton();
            protractor_1.browser.sleep(10000);
        });
    }
    verifyPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            // return browser.getTitle();
            var browserTitle = protractor_1.browser.getTitle().then(function (webpageTitle) {
                console.log("The title of the webpage is " + webpageTitle);
                if (webpageTitle === 'StackLynx - Sketch') {
                    console.log("Page title is matched");
                }
                else {
                    console.log("Page title mismatched");
                }
            });
        });
    }
}
exports.LoginPage = LoginPage;
