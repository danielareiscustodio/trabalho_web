/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('should show error message with incorrect email and password following the exact steps', () => {
    // Gera dados incorretos usando Faker (mesmo padrão do test-case-1)
    const incorrectData = {
      email: faker.internet.email(),
      password: faker.internet.password({ length: 8 })
    }

    // Step 1: Launch browser (automático no Cypress)
    // Step 2: Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')
    
    // Step 3: Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
    
    // Step 4: Click on 'Signup / Login' button
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Step 5: Verify 'Login to your account' is visible
    cy.get('h2').contains('Login to your account').should('be.visible')
    
    // Step 6: Enter incorrect email address and password
    cy.get('[data-qa="login-email"]').type(incorrectData.email)
    cy.get('[data-qa="login-password"]').type(incorrectData.password)
    
    // Step 7: Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    
    // Step 8: Verify error 'Your email or password is incorrect!' is visible
    cy.get('p').contains('Your email or password is incorrect!').should('be.visible')
  })
})

