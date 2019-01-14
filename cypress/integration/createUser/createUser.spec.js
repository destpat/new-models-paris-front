/* eslint-disable */
context('Create user', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/candidatures/information')
  })

  it('should create a new user', () => {

    // information step
    cy.get('#firstname-field').type('Yoan')
    cy.get('#lastname-field').type('Ficadiere')

    cy.get('[data-cy="sex-field"]').click()
    cy.get('[data-cy="sex-field-0"]').click({force: true})

    cy.get('[data-cy="day-field"]').click()
    cy.get('[data-cy="day-field-0"]').click({force: true})

    cy.get('[data-cy="month-field"]').click()
    cy.get('[data-cy="month-field-8"]').click({force: true})

    cy.get('[data-cy="year-field"]').click()
    cy.get('[data-cy="year-field-20"]').click({force: true})

    cy.get('#next-button').click()

    // contact step
    cy.get('#phone-field').type('0682474820')
    cy.get('#email-field').type('yoan.ficadiere@gmail.com')
    cy.get('#city-field').type('Paris')
    cy.get('#post-code-field').type('75013')
    cy.get('#next-button').click()

    // description step
    cy.get('#height-field').type(184)

    cy.get('[data-cy="hair-color-field"]').click()
    cy.get('[data-cy="hair-color-field-1"]').click({force: true})

    cy.get('[data-cy="eyes-color-field"]').click()
    cy.get('[data-cy="eyes-color-field-1"]').click({force: true})
    cy.get('#next-button').click()

    // extra type step
    cy.get('#underwear-field').click()
    cy.get('#photo-shoot-field').click()
    cy.get('#bikini-field').click()
    cy.get('#next-button').click()
    // jump photo step
    cy.get('#next-button').click()

    // password step
    cy.get('#password-field').type('9djfd2NDSk')
    cy.get('#password-confirmation-field').type('9djfd2NDSk')
    cy.get('#next-button').click()
  })
})
