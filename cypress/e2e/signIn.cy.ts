describe('Sign in', () => {
  it('User can visit sign in page', () => {
    cy.visit('/signin')
    cy.get('h1').should('contain', 'Sign in')
  })
  it('User can sign in with email and password', () => {
    cy.get('input[name=email]').clear().type('user@email.com')
    cy.get('input[name=password]').clear().type('password{enter}')
    cy.get('h1').should('contain', 'Authenticated')
  })
})
