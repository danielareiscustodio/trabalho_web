/**
 * Constantes e dados de teste centralizados
 * Facilita a manutenção e reutilização de dados
 */

export const TEST_DATA = {
  // Usuário válido para testes
  VALID_USER: {
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

  // Usuário inválido para testes de erro
  INVALID_USER: {
    email: 'invalid@test.com',
    password: 'wrongpassword'
  },

  // Usuário existente para testes de duplicação
  EXISTING_USER: {
    email: 'existing@test.com',
    password: '1234'
  },

  // Dados de produto
  PRODUCT: {
    searchTerm: 'Blue Top',
    name: 'Blue Top',
    category: 'Women',
    price: 'Rs. 500'
  },

  // Dados do formulário de contato
  CONTACT_FORM: {
    name: 'Test User',
    email: 'test@test.com',
    subject: 'Test Subject',
    message: 'This is a test message for contact form.'
  },

  // Dados de pagamento
  PAYMENT: {
    nameOnCard: 'Test User',
    cardNumber: '4111111111111111',
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2025'
  }
}

export const SELECTORS = {
  // Navegação
  SIGNUP_LOGIN_LINK: 'a[href="/login"]',
  PRODUCTS_LINK: 'a[href="/products"]',
  CONTACT_US_LINK: 'a[href="/contact_us"]',
  DELETE_ACCOUNT_LINK: 'a[href="/delete_account"]',
  LOGOUT_LINK: 'a[href="/logout"]',
  VIEW_CART_LINK: 'a[href="/view_cart"]',

  // Formulário de login
  LOGIN_EMAIL: '[data-qa="login-email"]',
  LOGIN_PASSWORD: '[data-qa="login-password"]',
  LOGIN_BUTTON: '[data-qa="login-button"]',

  // Formulário de signup
  SIGNUP_NAME: '[data-qa="signup-name"]',
  SIGNUP_EMAIL: '[data-qa="signup-email"]',
  SIGNUP_BUTTON: '[data-qa="signup-button"]',

  // Informações da conta
  GENDER_MRS: '#id_gender2',
  PASSWORD: '[data-qa="password"]',
  DAYS: '[data-qa="days"]',
  MONTHS: '[data-qa="months"]',
  YEARS: '[data-qa="years"]',
  NEWSLETTER: '#newsletter',
  OPTIN: '#optin',

  // Campos de endereço
  FIRST_NAME: '[data-qa="first_name"]',
  LAST_NAME: '[data-qa="last_name"]',
  COMPANY: '[data-qa="company"]',
  ADDRESS: '[data-qa="address"]',
  ADDRESS2: '[data-qa="address2"]',
  COUNTRY: '[data-qa="country"]',
  STATE: '[data-qa="state"]',
  CITY: '[data-qa="city"]',
  ZIPCODE: '[data-qa="zipcode"]',
  MOBILE_NUMBER: '[data-qa="mobile_number"]',
  CREATE_ACCOUNT_BUTTON: '[data-qa="create-account"]',

  // Botões e links
  CONTINUE_BUTTON: '[data-qa="continue-button"]',
  ADD_TO_CART: 'a:contains("Add to cart")',
  CONTINUE_SHOPPING: 'button:contains("Continue Shopping")',
  PROCEED_TO_CHECKOUT: 'a:contains("Proceed To Checkout")',
  PLACE_ORDER: 'a:contains("Place Order")',
  PAY_AND_CONFIRM: 'button:contains("Pay and Confirm Order")',

  // Produtos
  PRODUCT_OVERLAY: '.product-overlay',
  SINGLE_PRODUCTS: '.single-products',
  PRODUCT_INFORMATION: '.product-information',
  CART_INFO_TABLE: '#cart_info_table',

  // Busca
  SEARCH_PRODUCT: '#search_product',
  SUBMIT_SEARCH: '#submit_search',

  // Newsletter
  SUBSCRIPTION_EMAIL: '#susbscribe_email',
  SUBSCRIBE_BUTTON: '#subscribe',

  // Formulário de contato
  CONTACT_NAME: '[data-qa="name"]',
  CONTACT_EMAIL: '[data-qa="email"]',
  CONTACT_SUBJECT: '[data-qa="subject"]',
  CONTACT_MESSAGE: '[data-qa="message"]',
  CONTACT_SUBMIT: '[data-qa="submit-button"]',

  // Pagamento
  NAME_ON_CARD: 'input[name="name_on_card"]',
  CARD_NUMBER: 'input[name="card_number"]',
  CVC: 'input[name="cvc"]',
  EXPIRY_MONTH: 'input[name="expiry_month"]',
  EXPIRY_YEAR: 'input[name="expiry_year"]',

  // Mensagens
  ERROR_MESSAGE: 'p:contains("Your email or password is incorrect!")',
  EMAIL_EXISTS_MESSAGE: 'p:contains("Email Address already exist!")',
  SUCCESS_MESSAGE: 'p:contains("Success!")',
  ACCOUNT_CREATED: 'h2:contains("ACCOUNT CREATED!")',
  ACCOUNT_DELETED: 'h2:contains("ACCOUNT DELETED!")',
  LOGGED_IN_AS: 'li:contains("Logged in as")',
  SUBSCRIPTION_SUCCESS: 'p:contains("You have been successfully subscribed!")',
  ORDER_CONFIRMED: 'p:contains("Congratulations! Your order has been confirmed!")',

  // Títulos
  LOGIN_TITLE: 'h2:contains("Login to your account")',
  SIGNUP_TITLE: 'h2:contains("New User Signup!")',
  ACCOUNT_INFO_TITLE: 'h2:contains("ENTER ACCOUNT INFORMATION")',
  ALL_PRODUCTS_TITLE: 'h2:contains("All Products")',
  SEARCHED_PRODUCTS_TITLE: 'h2:contains("SEARCHED PRODUCTS")',
  GET_IN_TOUCH_TITLE: 'h2:contains("GET IN TOUCH")',
  SUBSCRIPTION_TITLE: 'SUBSCRIPTION',

  // Elementos da página
  BODY: 'body',
  HEADER: '#header',
  FOOTER: '#footer',
  FEATURES_ITEMS: '.features_items'
}

export const MESSAGES = {
  // Mensagens de sucesso
  ACCOUNT_CREATED_SUCCESS: 'ACCOUNT CREATED!',
  ACCOUNT_DELETED_SUCCESS: 'ACCOUNT DELETED!',
  LOGIN_SUCCESS: 'Logged in as',
  SUBSCRIPTION_SUCCESS: 'You have been successfully subscribed!',
  CONTACT_SUCCESS: 'Success! Your details have been submitted successfully.',
  ORDER_SUCCESS: 'Congratulations! Your order has been confirmed!',

  // Mensagens de erro
  LOGIN_ERROR: 'Your email or password is incorrect!',
  EMAIL_EXISTS_ERROR: 'Email Address already exist!',
  INVALID_EMAIL_ERROR: 'Please enter a valid email address',
  REQUIRED_FIELD_ERROR: 'This field is required',

  // Títulos das páginas
  HOME_PAGE_TITLE: 'Automation Exercise',
  LOGIN_PAGE_TITLE: 'Login to your account',
  SIGNUP_PAGE_TITLE: 'New User Signup!',
  PRODUCTS_PAGE_TITLE: 'All Products',
  CONTACT_PAGE_TITLE: 'GET IN TOUCH'
}

export const URLS = {
  BASE_URL: 'https://automationexercise.com',
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PRODUCTS: '/products',
  CONTACT: '/contact_us',
  CART: '/view_cart',
  DELETE_ACCOUNT: '/delete_account',
  LOGOUT: '/logout'
}

export const TIMEOUTS = {
  DEFAULT: 10000,
  PAGE_LOAD: 30000,
  REQUEST: 10000,
  RESPONSE: 10000,
  ELEMENT: 10000
}

export const BROWSERS = {
  CHROME: 'chrome',
  FIREFOX: 'firefox',
  EDGE: 'edge',
  ELECTRON: 'electron'
}

export const VIEWPORTS = {
  DESKTOP: { width: 1280, height: 720 },
  TABLET: { width: 768, height: 1024 },
  MOBILE: { width: 375, height: 667 }
}

export const TEST_CASES = {
  REGISTER_USER: 'Test Case 1: Register User',
  LOGIN_USER: 'Test Case 2: Login User with correct email and password',
  LOGIN_USER_INCORRECT: 'Test Case 3: Login User with incorrect email and password',
  LOGOUT_USER: 'Test Case 4: Logout User',
  REGISTER_EXISTING_EMAIL: 'Test Case 5: Register User with existing email',
  CONTACT_US_FORM: 'Test Case 6: Contact Us Form',
  VERIFY_PRODUCTS: 'Test Case 8: Verify All Products and product detail page',
  SEARCH_PRODUCT: 'Test Case 9: Search Product',
  SUBSCRIPTION: 'Test Case 10: Verify Subscription in home page',
  PLACE_ORDER: 'Test Case 15: Place Order: Register before Checkout'
}

export default {
  TEST_DATA,
  SELECTORS,
  MESSAGES,
  URLS,
  TIMEOUTS,
  BROWSERS,
  VIEWPORTS,
  TEST_CASES
}

