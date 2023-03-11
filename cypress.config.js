const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    username: 'user1',
    password: 'pa55word',
    url: 'https://api.thecatapi.com',
    endpoint: '/v1/images/search',
  },
  retries: {
    runMode: 3,
    openMode: 0,
  },
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/',
  },
})
