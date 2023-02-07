describe('Sign up', () => {
  it('User can visit sign up page', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Sign up')
  })
  it('User can sign up with email, username and password', () => {
    cy.get('input[name=email]').clear().type('user2@email.com')
    cy.get('input[name=username]').clear().type('user2')
    cy.get('input[name=password]').clear().type('password{enter}')
    cy.get('h1').should('contain', 'Authenticated')
  })

  it('User can sign in with recently created account', () => {
    cy.get('button').contains('Sign out').click()
    cy.visit('/signin')
    cy.get('h1').should('contain', 'Sign in')
    cy.get('input[name=email]').clear().type('user2@email.com')
    cy.get('input[name=password]').clear().type('password{enter}')
    cy.get('h1').should('contain', 'Authenticated')
  })
})
