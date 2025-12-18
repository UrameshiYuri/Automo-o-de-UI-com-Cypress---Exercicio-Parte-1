/// <reference types="cypress"/>

const { email, senha } = require("../fixtures/login.json")
const {compraSucesso} = require('../support/pages/compra.sucesso')
const {produto} = require('../fixtures/produto.json')

describe('fluxo de checkout do carrinho com AppActions', () => {

    it('deve fazer checkout com sucesso na loja EBAC', () => {
        
        cy.login(email, senha)
        cy.wait(2000)
        cy.compra(produto)
        compraSucesso.compraFeita().should('contain', 'Order Success')
        
    })

})