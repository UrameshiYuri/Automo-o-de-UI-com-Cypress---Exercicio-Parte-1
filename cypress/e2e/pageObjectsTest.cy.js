/// <reference types="cypress" />

 const createAccount= require('../support/pages/create.account')
 const {profileCreate} =  require('../support/pages/home.page')
 const {signUpProfile} = require('../support/pages/sign.up.page')
 const {firstName, lastName, phoneNumber, email, passWord, reEnterPassword} = require('../fixtures/data.json')

describe("Teste de criação de conta", () =>{

    beforeEach(()=>{
        cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
        cy.wait(2000)
        cy.visit('/')
        cy.wait(2000)
    })

    it("deve criar uma conta nova com sucesso", () =>{

        profileCreate.newProfile('Account')
        signUpProfile.signProfile()
        createAccount.newAccount(firstName, lastName, phoneNumber, email, passWord, reEnterPassword)
        
       //cy.get('[data-testid="signUp"] > .css-146c3p1').click()

    })
})