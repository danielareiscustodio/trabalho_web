const fs = require('fs');
const path = require('path');

/**
 * Script para gerar relatório consolidado dos testes Cypress
 * Combina múltiplos relatórios JSON em um único relatório HTML
 */

const reportsDir = path.join(__dirname, '../cypress/reports');
const outputFile = path.join(reportsDir, 'consolidated-report.html');

function generateConsolidatedReport() {
  try {
    // Verifica se o diretório de relatórios existe
    if (!fs.existsSync(reportsDir)) {
      console.log('Diretório de relatórios não encontrado. Criando...');
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    // Lista todos os arquivos JSON de relatório
    const reportFiles = fs.readdirSync(reportsDir)
      .filter(file => file.endsWith('.json'))
      .map(file => path.join(reportsDir, file));

    if (reportFiles.length === 0) {
      console.log('Nenhum arquivo de relatório encontrado.');
      return;
    }

    console.log(`Encontrados ${reportFiles.length} arquivos de relatório:`);
    reportFiles.forEach(file => console.log(`  - ${path.basename(file)}`));

    // Lê e combina todos os relatórios
    const allReports = [];
    reportFiles.forEach(file => {
      try {
        const reportData = JSON.parse(fs.readFileSync(file, 'utf8'));
        allReports.push(reportData);
      } catch (error) {
        console.error(`Erro ao ler arquivo ${file}:`, error.message);
      }
    });

    // Gera relatório HTML consolidado
    const htmlContent = generateHTMLReport(allReports);
    
    // Salva o relatório consolidado
    fs.writeFileSync(outputFile, htmlContent);
    console.log(`Relatório consolidado gerado: ${outputFile}`);

  } catch (error) {
    console.error('Erro ao gerar relatório consolidado:', error);
  }
}

function generateHTMLReport(reports) {
  const totalTests = reports.reduce((sum, report) => sum + (report.stats?.tests || 0), 0);
  const totalPassed = reports.reduce((sum, report) => sum + (report.stats?.passes || 0), 0);
  const totalFailed = reports.reduce((sum, report) => sum + (report.stats?.failures || 0), 0);
  const totalDuration = reports.reduce((sum, report) => sum + (report.stats?.duration || 0), 0);

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório Consolidado - Testes Cypress</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #eee;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #007bff;
        }
        .stat-card.success {
            border-left-color: #28a745;
        }
        .stat-card.danger {
            border-left-color: #dc3545;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .stat-label {
            color: #666;
            font-size: 0.9em;
        }
        .report-section {
            margin-bottom: 30px;
        }
        .report-section h3 {
            color: #333;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        .test-list {
            list-style: none;
            padding: 0;
        }
        .test-item {
            background: #f8f9fa;
            margin: 10px 0;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #007bff;
        }
        .test-item.passed {
            border-left-color: #28a745;
        }
        .test-item.failed {
            border-left-color: #dc3545;
        }
        .test-title {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .test-duration {
            color: #666;
            font-size: 0.9em;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Relatório Consolidado - Testes Cypress</h1>
            <p>Automation Exercise - Testes de Interface Web</p>
        </div>

        <div class="stats">
            <div class="stat-card">
                <div class="stat-number">${totalTests}</div>
                <div class="stat-label">Total de Testes</div>
            </div>
            <div class="stat-card success">
                <div class="stat-number">${totalPassed}</div>
                <div class="stat-label">Aprovados</div>
            </div>
            <div class="stat-card danger">
                <div class="stat-number">${totalFailed}</div>
                <div class="stat-label">Falharam</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${(totalDuration / 1000).toFixed(2)}s</div>
                <div class="stat-label">Duração Total</div>
            </div>
        </div>

        <div class="report-section">
            <h3>📊 Resumo dos Testes</h3>
            <ul class="test-list">
                ${reports.map(report => `
                    <li class="test-item ${report.stats?.failures > 0 ? 'failed' : 'passed'}">
                        <div class="test-title">${report.title || 'Relatório de Teste'}</div>
                        <div class="test-duration">
                            Testes: ${report.stats?.tests || 0} | 
                            Aprovados: ${report.stats?.passes || 0} | 
                            Falharam: ${report.stats?.failures || 0} | 
                            Duração: ${((report.stats?.duration || 0) / 1000).toFixed(2)}s
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="footer">
            <p>Relatório gerado em: ${new Date().toLocaleString('pt-BR')}</p>
            <p>Projeto: Automation Exercise - Cypress Tests</p>
        </div>
    </div>
</body>
</html>
  `;
}

// Executa o script se chamado diretamente
if (require.main === module) {
  generateConsolidatedReport();
}

module.exports = { generateConsolidatedReport };

