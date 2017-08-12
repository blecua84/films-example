// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['chai', 'mocha', '@angular/cli'],
    plugins: [
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-sinon'),
      require('karma-chai'),
      require('karma-phantomjs-launcher'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: [
      'mocha'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
