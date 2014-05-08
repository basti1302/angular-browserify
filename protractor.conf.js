exports.config = {

  // Use this (chromeOnly: true and chromDriver: ...) to run your tests
  // directly in chrome without starting a selenium instance before.
  /*
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  */

  // Use this (seleniumAddress: ...) if you start selenium separately, this can
  // be used with any browser, not only with chrome. For continuous integration,
  // we will want to use this setting with PhantomJS as the browser.
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  capabilities: {
    'browserName': 'phantomjs'
  },

  specs: ['test/e2e/**/*_spec.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
