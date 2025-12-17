/// <reference types="cypress"/>
import loginPage from "../support/pages/profile.login"
import { profileCreate } from "../support/pages/home.page"
import produto from "../fixtures/produto.json"
import compraProduto from "./pages/compra.produto"
Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    cy.wait(2000)
    profileCreate.newProfile('Account')
    cy.wait(2000)
    loginPage.login(email, senha)
})
Cypress.Commands.add('compra', () => {
    compraProduto.compra(produto)
})