/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 6: Contact Us Form', () => {
  it('should submit contact form successfully following the exact steps', () => {
    // Gera dados únicos usando Faker (mesmo padrão do test-case-1)
    const contactData = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      subject: faker.lorem.sentence(3),
      message: faker.lorem.paragraph(2)
    }

    // Step 1: Launch browser (automático no Cypress)
    // Step 2: Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')
    
    // Step 3: Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
    
    // Step 4: Click on 'Contact Us' button
    cy.get('#header li:nth-of-type(8) > a').click()
    
    // Step 5: Verify 'Get In Touch' is visible
    cy.get('h2').should('contain.text', 'Get In Touch')
    
    // Step 6: Enter name, email, subject and message
    cy.get('[data-qa="name"]').type(contactData.name)
    cy.get('[data-qa="email"]').type(contactData.email)
    cy.get('[data-qa="subject"]').type(contactData.subject)
    cy.get('[data-qa="message"]').type(contactData.message)
    
    // Step 7: Upload file
    cy.get('input[type="file"]').selectFile('cypress/fixtures/test-file.txt')
    
    // Step 8: Click 'Submit' button
    cy.get('[data-qa="submit-button"]').click()
    
    // Step 9: Click OK button
    cy.on('window:confirm', () => true)
    
    // Step 10: Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.get('.status').contains('Success! Your details have been submitted successfully.').should('be.visible')
    
    // Step 11: Click 'Home' button and verify that landed to home page successfully
    cy.get('#form-section a').contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.get('body').should('be.visible')
  })
})

