// Configuração global para evitar conflitos entre testes
beforeEach(() => {
  // Limpa cookies e localStorage antes de cada teste
  cy.clearCookies()
  cy.clearLocalStorage()
  
  // Aguarda um pequeno delay para evitar conflitos de timing
  cy.wait(100)
})

// Comando para limpar dados de teste
Cypress.Commands.add('cleanupTestData', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.clearSessionStorage()
})

// Comando para gerar dados únicos de teste
Cypress.Commands.add('generateTestData', () => {
  const timestamp = Date.now()
  const randomId = Math.floor(Math.random() * 10000)
  
  return {
    name: `Teste QA ${timestamp}`,
    email: `testeqa${timestamp}${randomId}@test.com`,
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
  }
})

// Comando para verificar se usuário está logado
Cypress.Commands.add('isLoggedIn', () => {
  cy.get('body').then(($body) => {
    return $body.find('a[href="/logout"]').length > 0
  })
})

// Comando para fazer logout se estiver logado
Cypress.Commands.add('logoutIfLoggedIn', () => {
  cy.get('body').then(($body) => {
    if ($body.find('a[href="/logout"]').length > 0) {
      cy.get('a[href="/logout"]').click()
    }
  })
})
