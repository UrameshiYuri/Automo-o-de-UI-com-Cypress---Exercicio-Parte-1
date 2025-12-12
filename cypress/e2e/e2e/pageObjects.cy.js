/// <reference types="cypress" />

// const {} = require('../')

describe("Teste de criação de conta", () =>{

    beforeEach(()=>{
        cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
        cy.wait(2000)
        cy.visit('/')
        cy.get('[href="/Tab/Account"]').click()
    })

    it("deve criar uma conta nova com sucesso", () =>{

       //cy.get('[href="/Tab/Account"]').click()
       //cy.get('[data-testid="signUp"] > .css-146c3p1').click()

    })
})