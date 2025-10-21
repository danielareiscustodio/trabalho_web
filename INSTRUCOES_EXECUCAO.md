# 🚀 Instruções de Execução - Projeto Cypress

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com Node.js)
- **Git** (para clonar o repositório)

## 🔧 Instalação

### 1. Clone o Repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd trabalho_web
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Verifique a Instalação do Cypress
```bash
npx cypress verify
```

## 🧪 Executando os Testes

### Modo Interativo (Recomendado para desenvolvimento)
```bash
npm run cypress:open
```
- Abre o Cypress Test Runner
- Permite executar testes individualmente
- Mostra interface gráfica
- Ideal para debug e desenvolvimento

### Modo Headless (Para CI/CD)
```bash
npm test
```
- Executa todos os testes em modo headless
- Mais rápido para execução automatizada
- Ideal para GitHub Actions

### Executar Teste Específico
```bash
# Teste individual
npx cypress run --spec "cypress/e2e/test-case-1-register-user.cy.js"

# Múltiplos testes
npx cypress run --spec "cypress/e2e/test-case-1-*.cy.js"
```

### Executar em Navegador Específico
```bash
# Chrome
npm run cypress:run:chrome

# Firefox
npm run cypress:run:firefox

# Edge
npm run cypress:run:edge
```

## 📊 Gerando Relatórios

### Relatório Completo
```bash
npm run test:all
```
- Executa todos os testes
- Gera relatórios Mochawesome
- Cria relatório consolidado

### Apenas Relatórios
```bash
npm run report:generate
```

### Limpar Artefatos
```bash
npm run clean
```

## 🎯 Casos de Teste Disponíveis

| Arquivo | Descrição |
|---------|-----------|
| `test-case-1-register-user.cy.js` | Registro de usuário |
| `test-case-2-login-user.cy.js` | Login com credenciais corretas |
| `test-case-3-login-user-incorrect.cy.js` | Login com credenciais incorretas |
| `test-case-4-logout-user.cy.js` | Logout do usuário |
| `test-case-5-register-existing-email.cy.js` | Registro com email existente |
| `test-case-6-contact-us-form.cy.js` | Formulário de contato |
| `test-case-8-verify-products.cy.js` | Verificação de produtos |
| `test-case-9-search-product.cy.js` | Busca de produtos |
| `test-case-10-subscription.cy.js` | Newsletter/Subscription |
| `test-case-15-place-order.cy.js` | Realizar pedido completo |

## 🔍 Debug e Troubleshooting

### Problemas Comuns

#### 1. Timeout Errors
```bash
# Aumente o timeout no cypress.config.js
defaultCommandTimeout: 15000
```

#### 2. Element Not Found
```bash
# Adicione waits nos testes
cy.wait(1000)
cy.get('selector').should('be.visible')
```

#### 3. Flaky Tests
```bash
# Use intercepts para mock
cy.intercept('GET', '/api/data').as('getData')
cy.wait('@getData')
```

### Debug Mode
```bash
# Executar com debug
DEBUG=cypress:* npm run cypress:open

# Executar teste específico com debug
DEBUG=cypress:* npx cypress run --spec "cypress/e2e/test-case-1-register-user.cy.js"
```

## 📁 Estrutura de Arquivos

```
trabalho_web/
├── cypress/
│   ├── e2e/                    # Casos de teste
│   ├── fixtures/               # Dados de teste
│   ├── support/                # Comandos personalizados
│   ├── screenshots/            # Screenshots de falhas
│   ├── videos/                 # Vídeos dos testes
│   └── reports/                # Relatórios gerados
├── .github/
│   └── workflows/              # GitHub Actions
├── scripts/                    # Scripts utilitários
├── cypress.config.js           # Configuração do Cypress
├── package.json                # Dependências e scripts
└── README.md                   # Documentação
```

## 🚀 GitHub Actions

O projeto inclui CI/CD automático:

### Triggers
- **Push** para `main` e `develop`
- **Pull Requests** para `main`
- **Schedule** diário às 2:00 UTC

### Navegadores Testados
- Chrome
- Firefox
- Edge

### Artifacts Gerados
- Relatórios de teste
- Screenshots de falhas
- Vídeos dos testes
- Relatório consolidado

## 📊 Relatórios

### Localização
- **Relatórios HTML:** `cypress/reports/`
- **Screenshots:** `cypress/screenshots/`
- **Vídeos:** `cypress/videos/`
- **Consolidado:** `cypress/reports/consolidated-report.html`

### Tipos de Relatório
1. **Mochawesome** - Relatórios individuais
2. **Consolidado** - Relatório unificado
3. **Screenshots** - Capturas de falhas
4. **Vídeos** - Gravações dos testes

## 🛠️ Comandos Úteis

```bash
# Instalação limpa
npm run install:clean

# Executar com interface
npm run test:headed

# Executar apenas um caso
npx cypress run --spec "cypress/e2e/test-case-1-register-user.cy.js"

# Executar com browser específico
npx cypress run --browser chrome

# Executar com configuração personalizada
npx cypress run --config viewportWidth=1920,viewportHeight=1080

# Debug de teste específico
npx cypress open --e2e --browser chrome
```

## 📝 Dados de Teste

Os dados estão em `cypress/fixtures/testData.json`:

```json
{
  "users": {
    "validUser": {
      "name": "Teste QA",
      "email": "testeqa1234@test.com",
      "password": "1234"
    }
  }
}
```

## 🔧 Configurações

### Cypress Config (`cypress.config.js`)
- **Base URL:** `https://automationexercise.com`
- **Viewport:** 1280x720
- **Timeout:** 10 segundos
- **Retries:** 2 tentativas
- **Video:** Habilitado
- **Screenshots:** Habilitado

### Environment Variables
```javascript
env: {
  testUser: {
    name: 'Teste QA',
    email: 'testeqa1234@test.com'
  }
}
```

## 🎯 Próximos Passos

1. **Execute os testes localmente**
2. **Verifique os relatórios gerados**
3. **Configure o GitHub Actions**
4. **Monitore a execução automática**

## 📞 Suporte

Para dúvidas ou problemas:

1. **Consulte a documentação** no README.md
2. **Verifique os logs** de execução
3. **Abra uma issue** no repositório
4. **Entre em contato** com a equipe

---

**🎯 Objetivo:** Executar com sucesso todos os casos de teste implementados, gerando relatórios detalhados e garantindo a qualidade da aplicação Automation Exercise.

