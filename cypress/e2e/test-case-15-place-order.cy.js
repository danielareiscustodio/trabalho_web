/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 15: Place Order: Register before Checkout', () => {
  it('should place order successfully following the exact steps', () => {
    // Configura viewport conforme especificado
    cy.viewport(1434, 884)
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
    
    // Step 4: Click 'Signup / Login' button
    cy.get('#header li:nth-of-type(4) > a').click()
    
    // Step 5: Fill all details in Signup and create account
    cy.get('[data-qa="signup-name"]').type(testData.name)
    cy.get('[data-qa="signup-email"]').type(testData.email)
    cy.get('[data-qa="signup-button"]').click()
    
    // Preenche informações da conta
    cy.get('#id_gender2').click()
    cy.get('[data-qa="password"]').type(testData.password)
    cy.get('[data-qa="days"]').select('4')
    cy.get('[data-qa="months"]').select('4')
    cy.get('[data-qa="years"]').select('1987')
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
    
    // Step 6: Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.get('body').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    
    // Step 7: Verify 'Logged in as username' at top
    cy.get('li').contains('Logged in as').should('be.visible')
    cy.get('li').contains(testData.name).should('be.visible')
    
    // Step 8: Add products to cart
    cy.get('div:nth-of-type(4) div.choose a').click()
    cy.get('div.product-details button').click()
    cy.get('#cartModal button').click()
    cy.get('#header li:nth-of-type(3) > a').click()
    
    // Step 9: Verify that cart page is displayed
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')
    
    // Step 10: Click Proceed To Checkout
    cy.get('#do_action > div.container a').click()
    
    // Step 11: Verify Address Details and Review Your Order
    cy.get('#address_delivery').should('be.visible')
    cy.get('#address_invoice').should('be.visible')
    cy.get('#cart_info').should('be.visible')
    
    // Step 12: Enter description in comment text area and click 'Place Order'
    cy.get('textarea').type('shjkahdkas dlhk dlkjfdl lkjdkl')
    cy.get('div:nth-of-type(7) > a').click()
    
    // Step 13: Enter payment details: Name on Card, Card Number, CVC, Expiration date
    cy.get('[data-qa="name-on-card"]').type('ajkhsdjk kjhsad kjhasd')
    cy.get('[data-qa="card-number"]').type('1234 5678 9876 1234')
    cy.get('[data-qa="cvc"]').type('12')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2027')
    
    // Step 14: Click 'Pay and Confirm Order' button
    cy.get('[data-qa="pay-button"]').click()
    
    // Step 15: Verify success message 'Your order has been placed successfully!'
    cy.get('h2').contains('Order Placed!').should('be.visible')
    cy.get('p').contains('Congratulations! Your order has been confirmed!').should('be.visible')
    
    // Step 16: Click 'Delete Account' button
    cy.get('li:nth-of-type(5) > a').click()
    
    // Step 17: Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.get('body').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})

