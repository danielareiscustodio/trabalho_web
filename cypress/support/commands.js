// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Import Page Objects
import HomePage from './page-objects/HomePage'
import LoginPage from './page-objects/LoginPage'

// Comando personalizado para login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
})

// Comando personalizado para registro de usuário
Cypress.Commands.add('registerUser', (userData) => {
  cy.visit('/')
  cy.get('a[href="/login"]').click()
  cy.get('[data-qa="signup-name"]').type(userData.name)
  // Gera email único se não especificado
  const email = userData.email || `teste${Date.now()}@test.com`
  cy.get('[data-qa="signup-email"]').type(email)
  cy.get('[data-qa="signup-button"]').click()
  
  // Preenche informações da conta
  cy.get('#id_gender2').check()
  cy.get('[data-qa="password"]').type(userData.password)
  cy.get('[data-qa="days"]').select('6')
  cy.get('[data-qa="months"]').select('7')
  cy.get('[data-qa="years"]').select('1992')
  cy.get('#newsletter').check()
  cy.get('#optin').check()
  
  // Preenche informações de endereço
  cy.get('[data-qa="first_name"]').type(userData.firstName)
  cy.get('[data-qa="last_name"]').type(userData.lastName)
  cy.get('[data-qa="company"]').type(userData.company)
  cy.get('[data-qa="address"]').type(userData.address)
  cy.get('[data-qa="address2"]').type(userData.address2)
  cy.get('[data-qa="country"]').select(userData.country)
  cy.get('[data-qa="state"]').type(userData.state)
  cy.get('[data-qa="city"]').type(userData.city)
  cy.get('[data-qa="zipcode"]').type(userData.zipcode)
  cy.get('[data-qa="mobile_number"]').type(userData.mobileNumber)
  
  cy.get('[data-qa="create-account"]').click()
})

// Comando personalizado para deletar conta
Cypress.Commands.add('deleteAccount', () => {
  cy.get('a[href="/delete_account"]').click()
  cy.get('[data-qa="continue-button"]').click()
})

// Comando personalizado para logout
Cypress.Commands.add('logout', () => {
  cy.get('a[href="/logout"]').click()
})

// Comando personalizado para adicionar produto ao carrinho
Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains(productName).click()
  cy.get('button[type="button"]').contains('Add to cart').click()
  cy.get('button').contains('Continue Shopping').click()
})

// Comando personalizado para verificar se elemento está visível
Cypress.Commands.add('shouldBeVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

// Comando personalizado para aguardar elemento aparecer
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible')
})

// Comando personalizado para gerar email único
Cypress.Commands.add('generateUniqueEmail', () => {
  const timestamp = Date.now()
  return `teste${timestamp}@test.com`
})

// Comando personalizado para scroll até elemento
Cypress.Commands.add('scrollToElement', (selector) => {
  cy.get(selector).scrollIntoView()
})

// Comando personalizado para aguardar página carregar completamente
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.window().its('document.readyState').should('equal', 'complete')
})
