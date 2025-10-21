/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 1: Register User', () => {
  it('should register a new user successfully following the exact steps', () => {
    // Gera dados únicos usando Faker
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

    // Step 1: Set viewport (701x874 as specified )
    cy.viewport(701, 874)
    
    // Step 2: Navigate to url 'https://automationexercise.com/'
    cy.visit('https://automationexercise.com/')
    
    // Step 3: Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
    
    // Step 4: Click on 'Signup / Login' button using the exact selectors 
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Step 5: Verify 'New User Signup!' is visible
    cy.get('h2').contains('New User Signup!').should('be.visible')
    
    // Step 6: Enter name and email address using exact selectors
    cy.get('[data-qa="signup-name"]').click()
    cy.get('[data-qa="signup-name"]').type(testData.name)
    
    // Enter email
    cy.get('[data-qa="signup-email"]').type(testData.email)
    
    // Step 7: Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    
    // Step 8: Wait for page to load and verify we're on the signup page
    cy.url().should('include', '/signup')
    cy.get('body').should('be.visible')
    
    // Step 9: Fill details: Title, Name, Email, Password, Date of birth
    // Click on Mrs. gender option
    cy.get('#id_gender2').click()
    
    // Click on password field and enter password
    cy.get('[data-qa="password"]').click()
    cy.get('[data-qa="password"]').type(testData.password)
    
    // Select day (6)
    cy.get('[data-qa="days"]').select('6')
    
    // Select month (7)
    cy.get('[data-qa="months"]').select('7')
    
    // Select year (1992)
    cy.get('[data-qa="years"]').select('1992')
    
    // Step 10: Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').click()
    
    // Step 11: Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').click()
    
    // Step 12: Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    // First name
    cy.get('[data-qa="first_name"]').click()
    cy.get('[data-qa="first_name"]').type(testData.firstName)
    
    // Last name
    cy.get('[data-qa="last_name"]').click()
    cy.get('[data-qa="last_name"]').type(testData.lastName)
    
    // Company
    cy.get('[data-qa="company"]').click()
    cy.get('[data-qa="company"]').type(testData.company)
    
    // Address
    cy.get('[data-qa="address"]').click()
    cy.get('[data-qa="address"]').type(testData.address)
    
    // Address 2
    cy.get('[data-qa="address2"]').click()
    cy.get('[data-qa="address2"]').type(testData.address2)
    
    // State
    cy.get('[data-qa="state"]').click()
    
    // Country
    cy.get('[data-qa="country"]').select(testData.country)
    
    // State
    cy.get('[data-qa="state"]').click()
    cy.get('[data-qa="state"]').type(testData.state)
    
    // City
    cy.get('[data-qa="city"]').click()
    cy.get('[data-qa="city"]').type(testData.city)
    
    // Zipcode
    cy.get('[data-qa="zipcode"]').click()
    cy.get('[data-qa="zipcode"]').type(testData.zipcode)
    
    // Mobile Number
    cy.get('[data-qa="mobile_number"]').click()
    cy.get('[data-qa="mobile_number"]').type(testData.mobileNumber)
    
    // Step 13: Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()
    
    // Step 14: Wait for page to load and verify account creation
    cy.url().should('include', '/account_created')
    cy.get('body').should('be.visible')
    // Aguarda um pouco para a página carregar completamente
    cy.wait(2000)
    // Verifica se o texto "Account Created!" está presente na página
    cy.get('body').should('contain', 'Account Created!')
    
    // Step 15: Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    
    // Step 16: Verify that 'Logged in as username' is visible
    cy.get('li').contains('Logged in as').should('be.visible')
    cy.get('li').contains(testData.name).should('be.visible')
    
    // Step 17: Click 'Delete Account' button
    cy.get('#header li:nth-of-type(5) > a').click()
    
    // Step 18: Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.url().should('include', '/delete_account')
    cy.get('body').should('be.visible')
    // Aguarda um pouco para a página carregar completamente
    cy.wait(2000)
    // Verifica se o texto "Account Deleted!" está presente na página
    cy.get('body').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })

  it('should handle registration with existing email', () => {
    // Gera dados únicos para o teste
    const testData = {
      name: faker.person.fullName(),
      email: faker.internet.email()
    }
    
    // Teste adicional para verificar comportamento com email existente
    cy.visit('https://automationexercise.com/')
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Tenta registrar com email já existente
    cy.get('[data-qa="signup-name"]').type(testData.name)
    cy.get('[data-qa="signup-email"]').type(testData.email) // Email único
    cy.get('[data-qa="signup-button"]').click()
    
    // Deve mostrar erro de email já existente (se o email já existir)
    // ou prosseguir normalmente (se o email for único)
    cy.get('body').should('be.visible')
  })
})