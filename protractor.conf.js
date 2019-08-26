exports.config = {
  allScriptsTimeout: 200000,
    getPageTimeout: 200000,

    // seleniumAddress: 'http://localhost:4444/wd/hub', // This is targetting local running instance of the selenium webdriver
  
    specs: [
      './features/features.feature',  // here's were keywoards are located
    ],

    SELENIUM_PROMISE_MANAGER: false,   //turning off promise manager to be able to use async/await
  
    capabilities: {
      browserName: 'chrome', // using chrome
      'goog:chromeOptions': {
        w3c: false
      }
    },
  
    framework: 'custom', //We need this line to use the cucumber framework
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),   
    cucumberOpts: {
      require: [
      './steps/*.js',
    ], // This is where actual steps are located
               
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        tags: true,
    profile: false,
    'no-source': true,
    format: 'json:./reports/report.json'
  },
 
  
  
  onPrepare: function () {                                           // This will be executed before tests run started
    browser.driver.manage().window().maximize();
    const chai = require('chai');
    chai.use(require('chai-as-promised'));
    global.expect = chai.expect;
    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
    browser.ignoreSynchronization = true;
    },
};
