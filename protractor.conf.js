exports.config = {
  allScriptsTimeout: 200000,
    getPageTimeout: 200000,

    seleniumAddress: 'http://localhost:4444/wd/hub', // This is targetting your local running instance of the selenium webdriver
  
    specs: [
      './features/features.feature',
    ],

    SELENIUM_PROMISE_MANAGER: false,
  
    capabilities: {
      browserName: 'chrome', // You can use any browser you want. On a CI environment you're going to want to use PhantomJS
      'goog:chromeOptions': {
        w3c: false
      }
    },
  
    framework: 'custom', //We need this line to use the cucumber framework
  
    frameworkPath: require.resolve('protractor-cucumber-framework'), // Here it is
  
    cucumberOpts: {
      require: [
      './steps/*.js',
    ], // This is where we'll be writing our actual tests
               
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        tags: true,
    profile: false,
    'no-source': true,
    format: 'json:./reports/report.json'
  },
 
  
  
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
    browser.ignoreSynchronization = true;

  },
};