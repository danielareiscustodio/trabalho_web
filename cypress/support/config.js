/**
 * Configurações centralizadas para os testes
 * Facilita a manutenção e alteração de configurações
 */

export const config = {
  // URLs
  baseUrl: 'https://automationexercise.com',
  
  // Timeouts
  timeouts: {
    default: 10000,
    pageLoad: 30000,
    request: 10000,
    response: 10000
  },
  
  // Viewport
  viewport: {
    width: 1280,
    height: 720
  },
  
  // Retries
  retries: {
    runMode: 2,
    openMode: 0
  },
  
  // Features
  features: {
    video: true,
    screenshotOnRunFailure: true
  },
  
  // Dados de teste padrão
  testData: {
    user: {
      name: 'Teste QA',
      email: 'testeqa1234@test.com',
      password: '1234',
      firstName: 'Teste',
      lastName: 'QA',
      company: 'Test Company',
      address: 'avenida 1234',
      address2: 'avenida 5678',
      country: 'United States',
      state: 'florida',
      city: 'orlando',
      zipcode: '1309011',
      mobileNumber: '1998767898'
    },
    product: {
      searchTerm: 'Blue Top',
      name: 'Blue Top',
      category: 'Women'
    },
    contact: {
      name: 'Test User',
      email: 'test@test.com',
      subject: 'Test Subject',
      message: 'This is a test message for contact form.'
    }
  },
  
  // Seletores comuns
  selectors: {
    // Navegação
    signupLoginLink: 'a[href="/login"]',
    productsLink: 'a[href="/products"]',
    contactUsLink: 'a[href="/contact_us"]',
    deleteAccountLink: 'a[href="/delete_account"]',
    logoutLink: 'a[href="/logout"]',
    
    // Formulários
    loginEmail: '[data-qa="login-email"]',
    loginPassword: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
    signupName: '[data-qa="signup-name"]',
    signupEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
    
    // Mensagens
    errorMessage: 'p:contains("Your email or password is incorrect!")',
    emailExistsMessage: 'p:contains("Email Address already exist!")',
    successMessage: 'p:contains("Success!")',
    accountCreated: 'h2:contains("ACCOUNT CREATED!")',
    accountDeleted: 'h2:contains("ACCOUNT DELETED!")',
    
    // Produtos
    productOverlay: '.product-overlay',
    addToCartButton: 'a:contains("Add to cart")',
    viewCartLink: 'a[href="/view_cart"]',
    searchProduct: '#search_product',
    submitSearch: '#submit_search',
    
    // Newsletter
    subscriptionEmail: '#susbscribe_email',
    subscribeButton: '#subscribe'
  },
  
  // Configurações de ambiente
  environments: {
    development: {
      baseUrl: 'https://automationexercise.com',
      retries: 1
    },
    staging: {
      baseUrl: 'https://automationexercise.com',
      retries: 2
    },
    production: {
      baseUrl: 'https://automationexercise.com',
      retries: 3
    }
  }
}

// Função para obter configuração baseada no ambiente
export function getConfig(environment = 'development') {
  const envConfig = config.environments[environment] || config.environments.development
  
  return {
    ...config,
    ...envConfig
  }
}

// Função para gerar dados únicos
export function generateUniqueData() {
  const timestamp = Date.now()
  return {
    email: `teste${timestamp}@test.com`,
    name: `Teste ${timestamp}`,
    phone: `119${timestamp.toString().slice(-8)}`
  }
}

// Função para aguardar elementos
export function waitForElement(selector, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('be.visible')
}

// Função para aguardar página carregar
export function waitForPageLoad() {
  cy.get('body').should('be.visible')
  cy.window().its('document.readyState').should('equal', 'complete')
}

export default config

