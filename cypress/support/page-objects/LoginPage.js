/**
 * Page Object Model para a página de login
 * Centraliza seletores e ações da página de login
 */

class LoginPage {
  // Seletores
  static selectors = {
    // Formulário de login
    loginEmail: '[data-qa="login-email"]',
    loginPassword: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
    
    // Formulário de signup
    signupName: '[data-qa="signup-name"]',
    signupEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
    
    // Títulos
    loginTitle: 'h2:contains("Login to your account")',
    signupTitle: 'h2:contains("New User Signup!")',
    
    // Mensagens de erro
    errorMessage: 'p:contains("Your email or password is incorrect!")',
    emailExistsMessage: 'p:contains("Email Address already exist!")',
    
    // Informações da conta
    accountInfoTitle: 'h2:contains("ENTER ACCOUNT INFORMATION")',
    
    // Campos de informações da conta
    genderMrs: '#id_gender2',
    password: '[data-qa="password"]',
    days: '[data-qa="days"]',
    months: '[data-qa="months"]',
    years: '[data-qa="years"]',
    newsletter: '#newsletter',
    optin: '#optin',
    
    // Campos de endereço
    firstName: '[data-qa="first_name"]',
    lastName: '[data-qa="last_name"]',
    company: '[data-qa="company"]',
    address: '[data-qa="address"]',
    address2: '[data-qa="address2"]',
    country: '[data-qa="country"]',
    state: '[data-qa="state"]',
    city: '[data-qa="city"]',
    zipcode: '[data-qa="zipcode"]',
    mobileNumber: '[data-qa="mobile_number"]',
    createAccountButton: '[data-qa="create-account"]',
    
    // Mensagens de sucesso
    accountCreated: 'h2:contains("ACCOUNT CREATED!")',
    accountDeleted: 'h2:contains("ACCOUNT DELETED!")',
    continueButton: '[data-qa="continue-button"]',
    
    // Navegação
    deleteAccountLink: 'a[href="/delete_account"]',
    logoutLink: 'a[href="/logout"]',
    loggedInAs: 'li:contains("Logged in as")'
  }

  // Ações de login
  static visit() {
    cy.visit('/login')
  }

  static verifyLoginPage() {
    cy.get(this.selectors.loginTitle).should('be.visible')
  }

  static login(email, password) {
    cy.get(this.selectors.loginEmail).type(email)
    cy.get(this.selectors.loginPassword).type(password)
    cy.get(this.selectors.loginButton).click()
  }

  static verifyLoginSuccess(username) {
    cy.get(this.selectors.loggedInAs).should('be.visible')
    cy.get('li').contains(username).should('be.visible')
  }

  static verifyLoginError() {
    cy.get(this.selectors.errorMessage).should('be.visible')
  }

  // Ações de signup
  static verifySignupPage() {
    cy.get(this.selectors.signupTitle).should('be.visible')
  }

  static startSignup(name, email) {
    cy.get(this.selectors.signupName).type(name)
    cy.get(this.selectors.signupEmail).type(email)
    cy.get(this.selectors.signupButton).click()
  }

  static verifyAccountInfoPage() {
    cy.get(this.selectors.accountInfoTitle).should('be.visible')
  }

  static fillAccountInfo(userData) {
    // Informações básicas
    cy.get(this.selectors.genderMrs).check()
    cy.get(this.selectors.password).type(userData.password)
    cy.get(this.selectors.days).select('6')
    cy.get(this.selectors.months).select('7')
    cy.get(this.selectors.years).select('1992')
    cy.get(this.selectors.newsletter).check()
    cy.get(this.selectors.optin).check()
    
    // Informações de endereço
    cy.get(this.selectors.firstName).type(userData.firstName)
    cy.get(this.selectors.lastName).type(userData.lastName)
    cy.get(this.selectors.company).type(userData.company)
    cy.get(this.selectors.address).type(userData.address)
    cy.get(this.selectors.address2).type(userData.address2)
    cy.get(this.selectors.country).select(userData.country)
    cy.get(this.selectors.state).type(userData.state)
    cy.get(this.selectors.city).type(userData.city)
    cy.get(this.selectors.zipcode).type(userData.zipcode)
    cy.get(this.selectors.mobileNumber).type(userData.mobileNumber)
  }

  static createAccount() {
    cy.get(this.selectors.createAccountButton).click()
  }

  static verifyAccountCreated() {
    cy.get(this.selectors.accountCreated).should('be.visible')
  }

  static continueAfterCreation() {
    cy.get(this.selectors.continueButton).click()
  }

  static verifyAccountDeleted() {
    cy.get(this.selectors.accountDeleted).should('be.visible')
  }

  static continueAfterDeletion() {
    cy.get(this.selectors.continueButton).click()
  }

  // Ações de navegação
  static deleteAccount() {
    cy.get(this.selectors.deleteAccountLink).click()
  }

  static logout() {
    cy.get(this.selectors.logoutLink).click()
  }

  static verifyEmailExistsError() {
    cy.get(this.selectors.emailExistsMessage).should('be.visible')
  }

  // Método completo de registro
  static registerUser(userData) {
    this.startSignup(userData.name, userData.email)
    this.verifyAccountInfoPage()
    this.fillAccountInfo(userData)
    this.createAccount()
    this.verifyAccountCreated()
    this.continueAfterCreation()
  }

  // Método completo de login
  static loginUser(email, password) {
    this.visit()
    this.verifyLoginPage()
    this.login(email, password)
  }
}

export default LoginPage

