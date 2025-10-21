// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './test-setup'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Configurações globais
Cypress.on('uncaught:exception', (err, runnable) => {
  // Previne que o Cypress falhe em erros não capturados
  // que podem ocorrer em aplicações web
  return false
})

// Configuração para ignorar erros de CORS e outros problemas comuns
Cypress.on('window:before:load', (win) => {
  // Desabilita service workers que podem interferir nos testes
  delete win.navigator.serviceWorker
})

// Configuração para melhorar a estabilidade dos testes
beforeEach(() => {
  // Limpa cookies e localStorage antes de cada teste
  cy.clearCookies()
  cy.clearLocalStorage()
})
