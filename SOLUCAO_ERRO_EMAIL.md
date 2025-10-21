# Solução para o Erro "Email Address already exist!"

## Problema Identificado

O erro "Email Address already exist!" estava ocorrendo devido a conflitos entre os testes que usavam o mesmo email. Os principais problemas eram:

1. **Email duplicado**: O email `testeqa1234@test.com` estava sendo usado em múltiplos testes
2. **Ordem de execução**: Os testes executavam em ordem aleatória, causando conflitos
3. **Dados estáticos**: Uso de emails fixos nos fixtures e configurações

## Soluções Implementadas

### 1. Geração de Emails Únicos

- **Arquivo**: `cypress/support/test-setup.js`
- **Solução**: Criado comando `generateTestData()` que gera emails únicos usando timestamp
- **Benefício**: Cada execução usa emails diferentes, evitando conflitos

### 2. Atualização dos Testes

#### Test Case 1 (Register User)
- **Arquivo**: `cypress/e2e/test-case-1-register-user.cy.js`
- **Mudanças**:
  - Uso de dados únicos gerados dinamicamente
  - Email único para cada execução
  - Dados consistentes em todo o teste

#### Test Case 5 (Register Existing Email)
- **Arquivo**: `cypress/e2e/test-case-5-register-existing-email.cy.js`
- **Mudanças**:
  - Geração de email único para o usuário "existente"
  - Uso do mesmo email para testar o erro
  - Isolamento entre execuções

### 3. Comandos Personalizados Melhorados

- **Arquivo**: `cypress/support/commands.js`
- **Melhorias**:
  - Comando `registerUser()` com fallback para email único
  - Comando `cleanupTestData()` para limpeza entre testes
  - Comando `logoutIfLoggedIn()` para garantir estado limpo

### 4. Script de Execução Ordenada

- **Arquivo**: `scripts/run-tests-ordered.sh`
- **Funcionalidade**:
  - Executa testes em ordem específica
  - Evita conflitos entre testes
  - Gera relatórios consolidados

## Como Usar

### Execução Normal (Pode ter conflitos)
```bash
npm run test
```

### Execução Ordenada (Recomendado)
```bash
npm run test:ordered
```

### Execução de Teste Específico
```bash
npm run test:specific "cypress/e2e/test-case-1-register-user.cy.js"
```

## Estrutura dos Dados Únicos

Cada execução gera dados únicos com a seguinte estrutura:

```javascript
{
  name: "Teste QA 1703123456789",
  email: "testeqa17031234567891234@test.com",
  password: "1234",
  firstName: "Teste",
  lastName: "QA",
  // ... outros campos
}
```

## Benefícios da Solução

1. **Eliminação de Conflitos**: Emails únicos evitam erros de duplicação
2. **Execução Confiável**: Testes podem ser executados em qualquer ordem
3. **Dados Consistentes**: Cada teste usa dados coerentes
4. **Facilidade de Manutenção**: Solução centralizada e reutilizável
5. **Relatórios Limpos**: Execução ordenada gera relatórios mais organizados

## Arquivos Modificados

- `cypress/e2e/test-case-1-register-user.cy.js`
- `cypress/e2e/test-case-5-register-existing-email.cy.js`
- `cypress/support/commands.js`
- `cypress/support/test-setup.js` (novo)
- `cypress/support/e2e.js`
- `scripts/run-tests-ordered.sh` (novo)
- `package.json`

## Verificação da Solução

Para verificar se a solução funcionou:

1. Execute: `npm run test:ordered`
2. Verifique se não há erros de "Email Address already exist!"
3. Confirme que todos os testes passam
4. Analise os relatórios gerados

## Próximos Passos

1. Execute os testes usando o script ordenado
2. Verifique se todos os testes passam
3. Analise os relatórios gerados
4. Documente qualquer problema adicional encontrado
