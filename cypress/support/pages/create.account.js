/// <reference types="cypress"/>
class createAccount {
    get #firstName() { return cy.get('[data-testid="firstName"]') }
    get #lastName() { return cy.get('[data-testid="lastName"]') }
    get #phoneNumber() { return cy.get('[data-testid="phone"]') }
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #password() { return cy.get(':nth-child(8) [data-testid="password"]') }
    get #reEnterPassword() { return cy.get('[data-testid="repassword"]') }
    get #createButtom() { return cy.get('[data-testid="create"]') }

    newAccount(firstName, lastName, phoneNumber, email, password, reEnterPassword) {
        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#phoneNumber.type(phoneNumber)
        this.#email.type(email)
        this.#password.type(password)
        this.#reEnterPassword.type(reEnterPassword)
        this.#createButtom.click()
    }
}
module.exports = new createAccount();