class compraProduto {
    get #barra1() { return cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(2) > .r-mh9cjk > .css-175oi2r') }
    //get #barraPequisa() {return cy.get('[data-testid="searchInput"]')}
    get #barraProduto() { return cy.get(':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]')}
    get #addCart() { return cy.get('[data-testid="addToCart"]') }
    get #payment() { return cy.get('[data-testid="selectAddressOrContinueToPayment"]') }
    get #checkout() { return cy.get('[data-testid="completeCheckout"]') }

    compra(produto) {
        this.#barra1.click()
        //this.#barraPequisa.clear().type('bag pandora{enter}')
        this.#barraProduto.click()
        this.#addCart.click()
        this.#payment.click()
        this.#checkout.click()
    }
}
module.exports = new compraProduto