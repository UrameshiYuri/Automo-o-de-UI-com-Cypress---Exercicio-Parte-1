/// <reference types="cypress" />

const createAccount = require('../support/pages/create.account')
const { profileCreate } = require('../support/pages/home.page')
const { signUpProfile } = require('../support/pages/sign.up.page')
const { firstName, lastName, phoneNumber, email, password, reEnterPassword } = require('../fixtures/data.json')
const { profilePage } = require('../support/pages/profile.page')

describe("Teste de criação de conta", () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    })

    it("deve criar uma conta nova com sucesso", () => {

        profileCreate.newProfile('Account')
        signUpProfile.signProfile()
        createAccount.newAccount(firstName, lastName, phoneNumber, email, password, reEnterPassword)
        profileCreate.newProfile('Account')
        profilePage.customerName().should('exist')
    })
})