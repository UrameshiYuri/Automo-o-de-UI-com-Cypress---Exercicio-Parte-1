export const newAccountPage={
    createAccountPage(signUp){
        return cy.get(`[data-testid="${signUp}] > .css-146c3p1`).click()
    }
}