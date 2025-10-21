/**
 * Utilitários e helpers para os testes
 * Funções auxiliares para facilitar a escrita dos testes
 */

import { config, generateUniqueData } from './config'

/**
 * Gera um email único para testes
 * @returns {string} Email único
 */
export function generateUniqueEmail() {
  const timestamp = Date.now()
  return `teste${timestamp}@test.com`
}

/**
 * Gera um nome único para testes
 * @returns {string} Nome único
 */
export function generateUniqueName() {
  const timestamp = Date.now()
  return `Teste ${timestamp}`
}

/**
 * Gera dados de usuário únicos
 * @returns {object} Dados de usuário únicos
 */
export function generateUserData() {
  const timestamp = Date.now()
  return {
    name: `Teste ${timestamp}`,
    email: `teste${timestamp}@test.com`,
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
    mobileNumber: `119${timestamp.toString().slice(-8)}`
  }
}

/**
 * Aguarda elemento aparecer com timeout customizado
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms
 */
export function waitForElement(selector, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('be.visible')
}

/**
 * Aguarda página carregar completamente
 */
export function waitForPageLoad() {
  cy.get('body').should('be.visible')
  cy.window().its('document.readyState').should('equal', 'complete')
}

/**
 * Aguarda elemento desaparecer
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms
 */
export function waitForElementToDisappear(selector, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('not.exist')
}

/**
 * Scroll até elemento
 * @param {string} selector - Seletor do elemento
 */
export function scrollToElement(selector) {
  return cy.get(selector).scrollIntoView()
}

/**
 * Aguarda e clica em elemento
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms
 */
export function waitAndClick(selector, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('be.visible').click()
}

/**
 * Aguarda e digita em elemento
 * @param {string} selector - Seletor do elemento
 * @param {string} text - Texto para digitar
 * @param {number} timeout - Timeout em ms
 */
export function waitAndType(selector, text, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('be.visible').type(text)
}

/**
 * Aguarda e limpa elemento
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms
 */
export function waitAndClear(selector, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('be.visible').clear()
}

/**
 * Verifica se elemento está visível
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms
 */
export function shouldBeVisible(selector, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('be.visible')
}

/**
 * Verifica se elemento não está visível
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms
 */
export function shouldNotBeVisible(selector, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('not.exist')
}

/**
 * Verifica se elemento contém texto
 * @param {string} selector - Seletor do elemento
 * @param {string} text - Texto esperado
 * @param {number} timeout - Timeout em ms
 */
export function shouldContainText(selector, text, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('contain', text)
}

/**
 * Verifica se elemento tem valor
 * @param {string} selector - Seletor do elemento
 * @param {string} value - Valor esperado
 * @param {number} timeout - Timeout em ms
 */
export function shouldHaveValue(selector, value, timeout = config.timeouts.default) {
  return cy.get(selector, { timeout }).should('have.value', value)
}

/**
 * Aguarda URL específica
 * @param {string} url - URL esperada
 * @param {number} timeout - Timeout em ms
 */
export function waitForUrl(url, timeout = config.timeouts.default) {
  return cy.url({ timeout }).should('include', url)
}

/**
 * Aguarda título da página
 * @param {string} title - Título esperado
 * @param {number} timeout - Timeout em ms
 */
export function waitForTitle(title, timeout = config.timeouts.default) {
  return cy.title({ timeout }).should('contain', title)
}

/**
 * Simula hover em elemento
 * @param {string} selector - Seletor do elemento
 */
export function hoverElement(selector) {
  return cy.get(selector).trigger('mouseover')
}

/**
 * Aguarda requisição específica
 * @param {string} method - Método HTTP
 * @param {string} url - URL da requisição
 * @param {string} alias - Alias para a requisição
 */
export function waitForRequest(method, url, alias) {
  cy.intercept(method, url).as(alias)
  return cy.wait(`@${alias}`)
}

/**
 * Limpa cookies e localStorage
 */
export function clearBrowserData() {
  cy.clearCookies()
  cy.clearLocalStorage()
}

/**
 * Aguarda tempo específico
 * @param {number} ms - Milissegundos para aguardar
 */
export function wait(ms) {
  return cy.wait(ms)
}

/**
 * Tira screenshot com nome customizado
 * @param {string} name - Nome do screenshot
 */
export function takeScreenshot(name) {
  return cy.screenshot(name)
}

/**
 * Verifica se elemento está habilitado
 * @param {string} selector - Seletor do elemento
 */
export function shouldBeEnabled(selector) {
  return cy.get(selector).should('be.enabled')
}

/**
 * Verifica se elemento está desabilitado
 * @param {string} selector - Seletor do elemento
 */
export function shouldBeDisabled(selector) {
  return cy.get(selector).should('be.disabled')
}

/**
 * Verifica se checkbox está marcado
 * @param {string} selector - Seletor do checkbox
 */
export function shouldBeChecked(selector) {
  return cy.get(selector).should('be.checked')
}

/**
 * Verifica se checkbox não está marcado
 * @param {string} selector - Seletor do checkbox
 */
export function shouldNotBeChecked(selector) {
  return cy.get(selector).should('not.be.checked')
}

/**
 * Seleciona opção em dropdown
 * @param {string} selector - Seletor do dropdown
 * @param {string} value - Valor para selecionar
 */
export function selectOption(selector, value) {
  return cy.get(selector).select(value)
}

/**
 * Verifica se elemento tem atributo
 * @param {string} selector - Seletor do elemento
 * @param {string} attribute - Nome do atributo
 * @param {string} value - Valor esperado do atributo
 */
export function shouldHaveAttribute(selector, attribute, value) {
  return cy.get(selector).should('have.attr', attribute, value)
}

/**
 * Verifica se elemento tem classe
 * @param {string} selector - Seletor do elemento
 * @param {string} className - Nome da classe
 */
export function shouldHaveClass(selector, className) {
  return cy.get(selector).should('have.class', className)
}

/**
 * Verifica se elemento não tem classe
 * @param {string} selector - Seletor do elemento
 * @param {string} className - Nome da classe
 */
export function shouldNotHaveClass(selector, className) {
  return cy.get(selector).should('not.have.class', className)
}

export default {
  generateUniqueEmail,
  generateUniqueName,
  generateUserData,
  waitForElement,
  waitForPageLoad,
  waitForElementToDisappear,
  scrollToElement,
  waitAndClick,
  waitAndType,
  waitAndClear,
  shouldBeVisible,
  shouldNotBeVisible,
  shouldContainText,
  shouldHaveValue,
  waitForUrl,
  waitForTitle,
  hoverElement,
  waitForRequest,
  clearBrowserData,
  wait,
  takeScreenshot,
  shouldBeEnabled,
  shouldBeDisabled,
  shouldBeChecked,
  shouldNotBeChecked,
  selectOption,
  shouldHaveAttribute,
  shouldHaveClass,
  shouldNotHaveClass
}

