/**
 * Page Object Model para a página inicial
 * Centraliza seletores e ações da página home
 */

class HomePage {
  // Seletores
  static selectors = {
    // Navegação
    signupLoginLink: 'a[href="/login"]',
    productsLink: 'a[href="/products"]',
    contactUsLink: 'a[href="/contact_us"]',
    
    // Elementos da página
    body: 'body',
    header: '#header',
    footer: '#footer',
    
    // Newsletter
    subscriptionEmail: '#susbscribe_email',
    subscribeButton: '#subscribe',
    
    // Produtos
    productOverlay: '.product-overlay',
    addToCartButton: 'a:contains("Add to cart")',
    viewCartLink: 'a[href="/view_cart"]',
    
    // Busca
    searchProduct: '#search_product',
    submitSearch: '#submit_search'
  }

  // Ações
  static visit() {
    cy.visit('/')
  }

  static verifyPageLoaded() {
    cy.get(this.selectors.body).should('be.visible')
    cy.title().should('contain', 'Automation Exercise')
  }

  static clickSignupLogin() {
    cy.get(this.selectors.signupLoginLink).click()
  }

  static clickProducts() {
    cy.get(this.selectors.productsLink).click()
  }

  static clickContactUs() {
    cy.get(this.selectors.contactUsLink).click()
  }

  static scrollToFooter() {
    cy.get(this.selectors.footer).scrollIntoView()
  }

  static subscribeToNewsletter(email) {
    cy.get(this.selectors.subscriptionEmail).type(email)
    cy.get(this.selectors.subscribeButton).click()
  }

  static searchProduct(searchTerm) {
    cy.get(this.selectors.searchProduct).type(searchTerm)
    cy.get(this.selectors.submitSearch).click()
  }

  static addFirstProductToCart() {
    cy.get('.single-products').first().within(() => {
      cy.get(this.selectors.productOverlay).trigger('mouseover')
      cy.get(this.selectors.addToCartButton).click()
    })
  }

  static addProductToCartByIndex(index) {
    cy.get('.single-products').eq(index).within(() => {
      cy.get(this.selectors.productOverlay).trigger('mouseover')
      cy.get(this.selectors.addToCartButton).click()
    })
  }

  static clickViewCart() {
    cy.get(this.selectors.viewCartLink).click()
  }

  static clickContinueShopping() {
    cy.get('button').contains('Continue Shopping').click()
  }
}

export default HomePage

