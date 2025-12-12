export const profileCreate={
    newProfile(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    }
}
