/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('should verify all products and product detail page following the exact steps', () => {
    // Step 1: Launch browser (automático no Cypress)
    // Step 2: Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')
    
    // Step 3: Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
    
    // Step 4: Click on 'Products' button 
    cy.get('#header li:nth-of-type(2) > a').click()
    
    // Step 5: Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products')
    cy.get('h2').contains('All Products').should('be.visible')
    
    // Step 6: The products list is visible
    cy.get('.features_items').should('be.visible')
    cy.get('.single-products').should('have.length.greaterThan', 0)
    
    // Step 7: Click on 'View Product' of first product
    cy.get('div.col-sm-9 > div > div:nth-of-type(2) div.choose a').click()
    
    // Step 8: User is landed to product detail page
    cy.url().should('include', '/product_details')
    
    // Step 9: Verify that detail detail is visible: product name, category, price, availability, condition, brand
    cy.get('.product-information').should('be.visible')
    cy.get('.product-information h2').should('be.visible') // Product name
    cy.get('.product-information p').contains('Category:').should('be.visible') // Category
    cy.get('.product-information span').contains('Rs.').should('be.visible') // Price
    cy.get('.product-information p').contains('Availability:').should('be.visible') // Availability
    cy.get('.product-information p').contains('Condition:').should('be.visible') // Condition
    cy.get('.product-information p').contains('Brand:').should('be.visible') // Brand
  })
})

