//protractor.conf.js

var cucumberReportDirectory = 'protractor-report';
var jsonReportFile = cucumberReportDirectory + '/cucumber_report.json';

exports.config = {
    keepAlive: true,
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      browserName: 'chrome',
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      '../e2e/**/*.feature'
    ],
  
    baseURL: 'http://localhost:4200/',
  
    cucumberOpts: {
      format: 'json:./' + jsonReportFile,
      require: '../e2e/steps/*.steps.js',
    }, 

    ignoreUncaughtExceptions: true,
    untrackOutstandingTimeouts: true,

    onCleanUp: () => {
      var CucumberHtmlReport = require('cucumber-html-report');

      return CucumberHtmlReport.create({
          source: jsonReportFile,
          dest: cucumberReportDirectory,
          title: 'Films BDD Reporter',
          component: new Date().toString()
      }).then(console.log).catch(console.log);
    },

    onPrepare: () => {
      browser.manage().window().maximize();
      browser.ignoreSynchronization = true
      browser.waitForAngular();
    }
  };