const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 30000,
    retries: {
      runMode: 3,
      openMode: 1
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    downloadsFolder: 'cypress/downloads',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    }
  },
  env: {
    // Variáveis de ambiente para desenvolvimento local
    testUser: {
      name: 'Teste QA Local',
      email: 'testeqa1234@test.com',
      password: '1234',
      firstName: 'Teste',
      lastName: 'QA',
      company: 'Test Company',
      address: 'avenida 1234',
      address2: 'avenida 5678',
      country: 'United States',
      state: 'florida',
      city: 'orlando',
      zipcode: '1309011',
      mobileNumber: '1998767898'
    },
    // Configurações específicas para desenvolvimento
    debug: true,
    slowMo: 100,
    headless: false
  }
})

