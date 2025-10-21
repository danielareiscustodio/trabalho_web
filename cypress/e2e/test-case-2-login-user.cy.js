/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 2: Login User', () => {
  it('should login with correct email and password following the exact steps', () => {
    // Gera dados únicos usando Faker (mesmo padrão do test-case-1)
    const testData = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 8 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: 'United States',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobileNumber: faker.phone.number()
    }

    // Step 1: Launch browser (automático no Cypress)
    // Step 2: Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')
    
    // Step 3: Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
    
    // Primeiro, registra um usuário para poder fazer login depois
    // Click on 'Signup / Login' button
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Registra o usuário primeiro
    cy.get('[data-qa="signup-name"]').type(testData.name)
    cy.get('[data-qa="signup-email"]').type(testData.email)
    cy.get('[data-qa="signup-button"]').click()
    
    // Preenche informações da conta
    cy.get('#id_gender2').click()
    cy.get('[data-qa="password"]').type(testData.password)
    cy.get('[data-qa="days"]').select('6')
    cy.get('[data-qa="months"]').select('7')
    cy.get('[data-qa="years"]').select('1992')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    
    // Preenche informações de endereço
    cy.get('[data-qa="first_name"]').type(testData.firstName)
    cy.get('[data-qa="last_name"]').type(testData.lastName)
    cy.get('[data-qa="company"]').type(testData.company)
    cy.get('[data-qa="address"]').type(testData.address)
    cy.get('[data-qa="address2"]').type(testData.address2)
    cy.get('[data-qa="country"]').select(testData.country)
    cy.get('[data-qa="state"]').type(testData.state)
    cy.get('[data-qa="city"]').type(testData.city)
    cy.get('[data-qa="zipcode"]').type(testData.zipcode)
    cy.get('[data-qa="mobile_number"]').type(testData.mobileNumber)
    
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()
    
    // Agora faz logout para testar o login
    cy.get('a[href="/logout"]').click()
    
    // Step 4: Click on 'Signup / Login' button
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Step 5: Verify 'Login to your account' is visible
    cy.get('h2').contains('Login to your account').should('be.visible')
    
    // Step 6: Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(testData.email)
    cy.get('[data-qa="login-password"]').type(testData.password)
    
    // Step 7: Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    
    // Step 8: Verify that 'Logged in as username' is visible
    cy.get('li').contains('Logged in as').should('be.visible')
    cy.get('li').contains(testData.name).should('be.visible')
    
    // Step 9: Click 'Delete Account' button
    cy.get('#header li:nth-of-type(5) > a').click()
    
    // Step 10: Verify that 'ACCOUNT DELETED!' is visible
    cy.url().should('include', '/delete_account')
    cy.get('body').should('be.visible')
    cy.wait(2000)
    cy.get('body').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})

