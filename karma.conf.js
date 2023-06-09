// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage-istanbul-reporter'),
      require('korma-sonarqube-unit-reporter')

    ],
    
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    // coveragelstanbulReporter: {

    //   dir: require('path').join(_dirname, 'coverage'),
      
    //   reports: ['lcovonly'],
      
    //   fixWebpackSourcePaths: true
      
    //   },
      
    //   reporters: [ 'sonarqubeUnit' ],
      
    //   sonarQubeUnitReporter: {
      
    //        sonarQubeVersion: 'LATEST',
      
    //        outputfile: 'test-reports/ut_repor.xml',
      
    //        overrideTestDescription: true,
      
    //        testPaths: ['./src'],
      
    //        testFilePattern: '.spec.ts',
      
    //        useBrowserName: false
      
    //   },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/proj'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    // 
    customLaunchers: {

      ChromeHeadless: {
  
          base: 'Chrome',
  
          flags: [
  
             '--headless',
  
             '--disable-gpu',
  
             '--no-sandbox',
  
             '--remote-debugging-port=9222',
  
           ]
  
        }
  
  },
  
  browsers: ['ChromeHeadless'],
  
  singleRun: true,
  
  restartOnFileChange: true,
    restartOnFileChange: true
  });
};
