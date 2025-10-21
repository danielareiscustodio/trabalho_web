#!/bin/bash

# Script para preparar o projeto para entrega
# Remove node_modules e arquivos desnecessários

echo "🧹 Preparando projeto para entrega..."

# Remove node_modules
if [ -d "node_modules" ]; then
    echo "📦 Removendo node_modules..."
    rm -rf node_modules
    echo "✅ node_modules removido"
else
    echo "ℹ️  node_modules não encontrado"
fi

# Remove arquivos de cache
echo "🗑️  Removendo arquivos de cache..."
rm -rf .npm
rm -rf .cypress
rm -f package-lock.json
rm -f yarn.lock

# Remove relatórios e artefatos de teste
echo "📊 Removendo relatórios e artefatos..."
rm -rf cypress/reports
rm -rf cypress/videos
rm -rf cypress/screenshots
rm -rf cypress/downloads

# Remove logs
echo "📝 Removendo logs..."
rm -f *.log
rm -f logs/*.log

# Remove arquivos temporários
echo "🗂️  Removendo arquivos temporários..."
rm -rf tmp/
rm -rf temp/
rm -f .DS_Store
rm -f Thumbs.db

echo "✅ Projeto preparado para entrega!"
echo ""
echo "📋 Arquivos removidos:"
echo "   - node_modules/"
echo "   - cypress/reports/"
echo "   - cypress/videos/"
echo "   - cypress/screenshots/"
echo "   - cypress/downloads/"
echo "   - Arquivos de cache e logs"
echo ""
echo "🚀 O projeto está pronto para ser compactado e entregue!"
echo ""
echo "💡 Para reinstalar as dependências após a entrega:"
echo "   npm install"

