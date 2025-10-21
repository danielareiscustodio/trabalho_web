/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Test Case 9: Search Product', () => {
  it('should search for products successfully following the exact steps', () => {
    // Gera termo de busca usando Faker (mesmo padrão do test-case-1)
    const searchTerm = 'Sleeveless Dress' // Termo específico do teste

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
    
    // Step 6: Enter product name in search input and click search button
    cy.get('#search_product').type(searchTerm)
    cy.get('#submit_search').click()
    
    // Step 7: Verify 'Searched Products' is visible
    cy.get('h2').contains('Searched Products').should('be.visible')
    
    // Step 8: Verify all the products related to search are visible
    cy.get('.single-products').should('have.length.greaterThan', 0)
    
    // Verifica se pelo menos um produto contém o termo pesquisado
    cy.get('.single-products').should('contain', searchTerm)
  })
})

