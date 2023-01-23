describe('form', () => {
  beforeEach(() => {
    cy.visit('https://joyful-crumble-07954a.netlify.app/')
    // cy.visit('http://localhost:3000/')
  })

  it('allows successful submit', () => {
    cy.get('[data-cy=name-input').type('name')
    cy.get('[data-cy=email-input').type('email@email')
    cy.get('[data-cy=password-input').type('password')
    cy.get('[data-cy=occupation-input').type('{downArrow},{enter}')
    cy.get('[data-cy=state-input').type('{downArrow},{enter}')
    cy.get('[data-cy=submit-btn]').click()
    cy.get('[data-cy=success-alert]').should('exist')
  })

  it('does not allow unfilled/unfinished form', () => {
    cy.get('[data-cy=submit-btn]').click()
    cy.get('[data-cy=success-alert]').should('not.exist')
  })

  })
