/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 10: Verify Subscription in home page', () => {
  it('should verify subscription functionality following the exact steps', () => {
    // Gera email único usando Faker (mesmo padrão do test-case-1)
    const testEmail = faker.internet.email()

    // Step 1: Launch browser (automático no Cypress)
    // Step 2: Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')
    
    // Step 3: Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
    
    // Step 4: Scroll down to footer
    cy.get('#footer').scrollIntoView()
    
    // Step 5: Verify text 'Subscription'
    cy.get('#footer').contains('Subscription').should('be.visible')
    
    // Step 6: Enter email address in input and click arrow button
    cy.get('#susbscribe_email').type(testEmail)
    cy.get('#footer i').click()
    
    // Step 7: Verify success message 'You have been successfully subscribed!' is visible
    cy.get('#footer').contains('You have been successfully subscribed!').should('be.visible')
  })
})

