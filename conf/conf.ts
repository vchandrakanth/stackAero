import {ProtractorBrowser, Config, browser} from 'protractor';
 let prop  = require('../conf/properties');

export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './REPORTS/',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'failure+success',
        withLogs: true,
        writeReportFreq: 'asap',
        clearFoldersBeforeTest: true
    }],
  specs: ['../TestScript.js'],

  noGlobals: true,

    SELENIUM_PROMISE_MANAGER: false,
	
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  onPrepare: () => {
   let globals = require('protractor');
   let browser = globals.browser;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
 }
}
