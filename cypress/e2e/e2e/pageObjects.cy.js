/// <reference types="cypress" />

describe("Teste de criação de conta", () =>{

    beforeEach(()=>{
        cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
        cy.visit('/')
    })

    it("deve criar uma conta nova com sucesso", () =>{
       
    })
})