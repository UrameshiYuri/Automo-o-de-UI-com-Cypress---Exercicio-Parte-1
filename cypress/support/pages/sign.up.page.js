export const signUpProfile={
    signProfile(){
        return cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    }
}
