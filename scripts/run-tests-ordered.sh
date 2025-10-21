#!/bin/bash

# Script para executar testes em ordem específica para evitar conflitos
# Este script garante que os testes sejam executados na ordem correta

echo "🚀 Iniciando execução dos testes em ordem específica..."

# Limpa dados anteriores
echo "🧹 Limpando dados de execuções anteriores..."
rm -rf cypress/videos cypress/screenshots cypress/reports

# Executa testes em ordem específica para evitar conflitos
echo "📋 Executando Test Case 1: Register User"
npx cypress run --spec "cypress/e2e/test-case-1-register-user.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 2: Login User"
npx cypress run --spec "cypress/e2e/test-case-2-login-user.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 3: Login User Incorrect"
npx cypress run --spec "cypress/e2e/test-case-3-login-user-incorrect.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 4: Logout User"
npx cypress run --spec "cypress/e2e/test-case-4-logout-user.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 5: Register Existing Email"
npx cypress run --spec "cypress/e2e/test-case-5-register-existing-email.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 6: Contact Us Form"
npx cypress run --spec "cypress/e2e/test-case-6-contact-us-form.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 8: Verify Products"
npx cypress run --spec "cypress/e2e/test-case-8-verify-products.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 9: Search Product"
npx cypress run --spec "cypress/e2e/test-case-9-search-product.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 10: Subscription"
npx cypress run --spec "cypress/e2e/test-case-10-subscription.cy.js" --browser chrome --headed

echo "📋 Executando Test Case 15: Place Order"
npx cypress run --spec "cypress/e2e/test-case-15-place-order.cy.js" --browser chrome --headed

echo "✅ Todos os testes foram executados!"
echo "📊 Gerando relatório consolidado..."

# Gera relatório consolidado
npm run report:consolidated

echo "🎉 Execução concluída! Verifique os relatórios em cypress/reports/"
