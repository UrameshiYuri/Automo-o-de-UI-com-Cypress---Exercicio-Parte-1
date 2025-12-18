/// <reference types="cypress"/>

const { email, senha } = require("../fixtures/login.json")
const {loginPage} = require('../support/pages/profile.login')
const {produto} = require('../fixtures/produto.json')

describe('fluxo de checkout do carrinho com AppActions', () => {

    it('deve fazer checkout com sucesso na loja EBAC', () => {
        
        cy.login(email, senha)
        cy.wait(2000)
        cy.compra(produto)
    })

})