/// <reference types="cypress"/>

class loginPage {
    get #email() { return cy.get('[data-testid="email"]') }
    get #senha() { return cy.get('[data-testid="password"]') }
    get #btnLoggin() { return cy.get('[data-testid="btnLogin"]') }

    login(email, senha) {
        this.#email.type(email)
        this.#senha.type(senha)
        this.#btnLoggin.click()
    }
}
module.exports = new loginPage