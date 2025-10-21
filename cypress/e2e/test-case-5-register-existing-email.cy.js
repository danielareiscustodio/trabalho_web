/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 5: Register User with existing email', () => {
  it('should show error message when registering with existing email following the exact steps', () => {
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

    // Dados para o segundo usuário (com email existente)
    const secondUserData = {
      name: faker.person.fullName()
    }

    // Step 1: Launch browser (automático no Cypress)
    // Step 2: Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')
    
    // Step 3: Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
    
    // Primeiro, registra um usuário para ter um email existente
    // Step 4: Click on 'Signup / Login' button
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Registra o primeiro usuário
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
    
    // Faz logout para testar registro com email existente
    cy.get('a[href="/logout"]').click()
    
    // Agora tenta registrar com o mesmo email
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Step 5: Verify 'New User Signup!' is visible
    cy.get('h2').contains('New User Signup!').should('be.visible')
    
    // Step 6: Enter name and already registered email address
    cy.get('[data-qa="signup-name"]').type(secondUserData.name)
    cy.get('[data-qa="signup-email"]').type(testData.email) // Email já existente
    
    // Step 7: Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    
    // Step 8: Verify error 'Email Address already exist!' is visible
    cy.get('p').contains('Email Address already exist!').should('be.visible')
  })
})
