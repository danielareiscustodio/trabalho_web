# 🚀 Automation Exercise - Cypress Tests

Este projeto implementa testes automatizados para a aplicação fictícia **Automation Exercise** usando Cypress, cobrindo os casos de teste 1, 2, 3, 4, 5, 6, 8, 9, 10 e 15.

## 📋 Casos de Teste Implementados

| Test Case | Descrição | Status |
|-----------|-----------|--------|
| **1** | Register User | ✅ Implementado |
| **2** | Login User with correct email and password | ✅ Implementado |
| **3** | Login User with incorrect email and password | ✅ Implementado |
| **4** | Logout User | ✅ Implementado |
| **5** | Register User with existing email | ✅ Implementado |
| **6** | Contact Us Form | ✅ Implementado |
| **8** | Verify All Products and product detail page | ✅ Implementado |
| **9** | Search Product | ✅ Implementado |
| **10** | Verify Subscription in home page | ✅ Implementado |
| **15** | Place Order: Register before Checkout | ✅ Implementado |

## 🛠️ Tecnologias Utilizadas

- **Cypress** - Framework de automação de testes
- **Node.js** - Runtime JavaScript
- **Faker.js** - Geração de dados de teste únicos
- **Mochawesome** - Geração de relatórios
- **GitHub Actions** - CI/CD
- **JavaScript** - Linguagem de programação

## 📁 Estrutura do Projeto

```
trabalho_web/
├── cypress/
│   ├── e2e/                          # Casos de teste
│   │   ├── test-case-1-register-user.cy.js
│   │   ├── test-case-2-login-user.cy.js
│   │   ├── test-case-3-login-user-incorrect.cy.js
│   │   ├── test-case-4-logout-user.cy.js
│   │   ├── test-case-5-register-existing-email.cy.js
│   │   ├── test-case-6-contact-us-form.cy.js
│   │   ├── test-case-8-verify-products.cy.js
│   │   ├── test-case-9-search-product.cy.js
│   │   ├── test-case-10-subscription.cy.js
│   │   └── test-case-15-place-order.cy.js
│   ├── fixtures/                     # Dados de teste
│   │   ├── testData.json
│   │   └── test-file.txt
│   ├── support/                      # Comandos personalizados
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── screenshots/                  # Screenshots de falhas
│   ├── videos/                       # Vídeos dos testes
│   └── reports/                      # Relatórios gerados
├── .github/
│   └── workflows/
│       └── cypress-tests.yml         # GitHub Actions
├── scripts/
│   └── generate-report.js           # Script de relatórios
├── cypress.config.js                # Configuração do Cypress
├── package.json                     # Dependências e scripts
└── README.md                        # Documentação
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd trabalho_web
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Verifique a instalação:**
   ```bash
   npx cypress verify
   ```

## 🧪 Executando os Testes

### Execução Local

#### Abrir Cypress Test Runner (Modo Interativo)
```bash
npm run cypress:open
```

#### Executar Todos os Testes (Modo Headless)
```bash
npm test
```

#### Executar Testes em Navegador Específico
```bash
# Chrome
npm run cypress:run:chrome

# Firefox
npm run cypress:run:firefox

# Edge
npm run cypress:run:edge
```

#### Executar Testes com Interface Gráfica
```bash
npm run test:headed
```

### Execução com Relatórios

```bash
# Executa testes e gera relatório
npm run test:all

# Gera apenas relatório consolidado
npm run report:generate
```

## 📊 Relatórios

### Tipos de Relatório

1. **Relatórios Mochawesome** - Relatórios individuais por execução
2. **Relatório Consolidado** - Relatório HTML unificado
3. **Screenshots** - Capturas de tela em caso de falhas
4. **Vídeos** - Gravações dos testes

### Localização dos Relatórios

- **Relatórios JSON/HTML:** `cypress/reports/`
- **Screenshots:** `cypress/screenshots/`
- **Vídeos:** `cypress/videos/`
- **Relatório Consolidado:** `cypress/reports/consolidated-report.html`

## 🔄 CI/CD com GitHub Actions

O projeto inclui configuração automática de CI/CD com GitHub Actions:

### Triggers
- **Push** para branches `main` e `develop`
- **Pull Requests** para branch `main`
- **Schedule** - Execução diária às 2:00 UTC

### Navegadores Suportados
- Chrome
- Firefox
- Edge

### Artifacts Gerados
- Relatórios de teste
- Screenshots de falhas
- Vídeos dos testes
- Relatório consolidado

## 🎯 Casos de Teste Detalhados

### Test Case 1: Register User
- **Objetivo:** Registrar um novo usuário
- **Fluxo:** Navegação → Signup → Preenchimento → Criação → Verificação → Exclusão
- **Validações:** Página inicial, formulário, criação de conta, login, exclusão

### Test Case 2: Login User
- **Objetivo:** Login com credenciais corretas
- **Fluxo:** Navegação → Login → Verificação → Exclusão
- **Validações:** Formulário de login, autenticação, redirecionamento

### Test Case 3: Login User (Incorrect)
- **Objetivo:** Validar login com credenciais incorretas
- **Fluxo:** Navegação → Login com dados inválidos → Verificação de erro
- **Validações:** Mensagens de erro, permanência na página de login

### Test Case 4: Logout User
- **Objetivo:** Logout do usuário
- **Fluxo:** Login → Logout → Verificação
- **Validações:** Redirecionamento, limpeza de sessão

### Test Case 5: Register Existing Email
- **Objetivo:** Validar registro com email existente
- **Fluxo:** Tentativa de registro com email já cadastrado
- **Validações:** Mensagem de erro, prevenção de duplicação

### Test Case 6: Contact Us Form
- **Objetivo:** Envio do formulário de contato
- **Fluxo:** Navegação → Preenchimento → Envio → Verificação
- **Validações:** Campos obrigatórios, submissão, mensagem de sucesso

### Test Case 8: Verify Products
- **Objetivo:** Verificar página de produtos e detalhes
- **Fluxo:** Navegação → Lista de produtos → Detalhes do produto
- **Validações:** Exibição de produtos, informações detalhadas

### Test Case 9: Search Product
- **Objetivo:** Buscar produtos
- **Fluxo:** Navegação → Busca → Resultados
- **Validações:** Funcionalidade de busca, resultados relevantes

### Test Case 10: Subscription
- **Objetivo:** Verificar funcionalidade de newsletter
- **Fluxo:** Navegação → Scroll → Inscrição → Verificação
- **Validações:** Formulário de inscrição, mensagem de sucesso

### Test Case 15: Place Order
- **Objetivo:** Realizar pedido completo
- **Fluxo:** Registro → Produtos → Carrinho → Checkout → Pagamento → Confirmação
- **Validações:** Fluxo completo de compra, pagamento, confirmação

## 🛠️ Comandos Personalizados

O projeto inclui comandos personalizados para facilitar a automação:

```javascript
// Login
cy.login(email, password)

// Registro de usuário
cy.registerUser(userData)

// Deletar conta
cy.deleteAccount()

// Logout
cy.logout()

// Adicionar produto ao carrinho
cy.addProductToCart(productName)

// Gerar email único
cy.generateUniqueEmail()
```

## 📝 Dados de Teste

Os dados de teste estão centralizados em `cypress/fixtures/testData.json`:

```json
{
  "users": {
    "validUser": {
      "name": "Teste QA",
      "email": "testeqa1234@test.com",
      "password": "1234",
      // ... outros campos
    }
  },
  "products": {
    "searchTerm": "Blue Top",
    "productName": "Blue Top"
  },
  "contactForm": {
    "name": "Test User",
    "email": "test@test.com",
    // ... outros campos
  }
}
```

## 🔧 Configurações

### Cypress Configuration (`cypress.config.js`)

- **Base URL:** `https://automationexercise.com`
- **Viewport:** 1280x720
- **Timeout:** 10 segundos
- **Retries:** 2 tentativas
- **Video:** Habilitado
- **Screenshots:** Habilitado em falhas

### Environment Variables

```javascript
env: {
  testUser: {
    name: 'Teste QA',
    email: 'testeqa1234@test.com',
    // ... outros dados
  }
}
```

## 🐛 Troubleshooting

### Problemas Comuns

1. **Timeout Errors:**
   - Aumente o `defaultCommandTimeout` no `cypress.config.js`
   - Verifique a conectividade com o site

2. **Element Not Found:**
   - Verifique se os seletores estão corretos
   - Aguarde o carregamento completo da página

3. **Flaky Tests:**
   - Adicione `cy.wait()` para aguardar elementos
   - Use `cy.intercept()` para mock de requisições

### Debug

```bash
# Executar com debug
DEBUG=cypress:* npm run cypress:open

# Executar teste específico
npx cypress run --spec "cypress/e2e/test-case-1-register-user.cy.js"
```

## 📈 Boas Práticas Implementadas

1. **Seletores Robustos:** Uso de `data-qa` attributes
2. **Page Object Model:** Comandos personalizados organizados
3. **Data-Driven Testing:** Fixtures para dados de teste
4. **Error Handling:** Tratamento de exceções
5. **Cleanup:** Limpeza de dados após testes
6. **Reporting:** Relatórios detalhados
7. **CI/CD:** Automação completa

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Daniel Arc** - Desenvolvimento e implementação

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique a documentação
2. Consulte os issues do repositório
3. Entre em contato com a equipe

---

**🎯 Objetivo:** Implementar automação de testes robusta e confiável para a aplicação Automation Exercise, seguindo as melhores práticas de QA e garantindo cobertura completa dos casos de teste solicitados.

