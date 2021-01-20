// See README.md for important details.
import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { LoginPage } from '../pageobjects/loginPagePo';
import { MenuPage } from '../pageobjects/menuPagePo';
import { threadId } from 'worker_threads';

import { async } from 'q';
import fs = require('fs');
import { createWriteStream } from 'fs';

let utils = require("../utils/utils");
let propdata = require('../conf/properties');


describe('stackaero excercise ', async function () {
  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
  });

  
  it('Step 1: open the brower and login', async function (): Promise<any> {

    //Open the Url
    await utils.goToMainPage();
    //Login
    let loginPage = new LoginPage();
    await loginPage.login(propdata.userName, propdata.passWord, propdata.tenant);

    // console.log("the browser title is "+loginPage.getPageTitle());
    
    // expect(loginPage.getPageTitle()).toMatch("zoetisadm");
    loginPage.verifyPageTitle();
    
   
  });

  it('Step 2: Verify the Help Guide Menu', async function (): Promise<any> {
    let menuPage = new MenuPage();
    await menuPage.clickhelpGuideMenu();
    menuPage.verifyhelpGuidePageTitle();

  });

  it('Step 3: Verify the Home Menu', async function (): Promise<any> {

    let menuPage = new MenuPage();
    await menuPage.clickhomeMenu();
    menuPage.verifyhomePageTitle();

  });

   it('Step 4: Verify the Social Menu', async function (): Promise<any> {

    let menuPage = new MenuPage();
    await menuPage.clicksocialMenu();
    // menuPage.verifyhelpGuideTitle();

  });


  

  afterEach(function () {
      
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

});

