//protractor.conf.js
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    directConnect: true,
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      '../e2e/**/*.feature'
    ],
  
    baseURL: 'http://localhost:4200/',
  
    cucumberOpts: {
      require: '../e2e/steps/*.steps.js',
      //tags: [],
      //strict: true,
      //compiler: []
    }, 

    onPrepare: () => {
      browser.manage().window().maximize();
      // implicit and page load timeouts
      browser.manage().timeouts().pageLoadTimeout(40000);
      browser.manage().timeouts().implicitlyWait(25000);
    }
  };