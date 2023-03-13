const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  retries: {
    runMode: 3,
    openMode: 0,
  },
  chromeWebSecurity: false,
  video: true,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 120000,
  env: {
    username: 'user1',
    password: 'pa55word',
    url: 'https://api.thecatapi.com',
    endpoint: '/v1/images/search',
  },
  e2e: {
    baseUrl: 'http://localhost:3000/',
    },
});
