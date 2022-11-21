/* eslint-disable no-undef */
describe('affirmation app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/')
    })
  
    it('renders with buttons', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
   
  
      // We can go even further and check that the default todos each contain
      // the correct text. We use the `first` and `last` functions
      // to get just the first and last matched elements individually,
      // and then perform an assertion with `should`.
      cy.findByText('What affirmation do you want to give to yourself today?').should('be.visible')
      cy.get('form')
      .findByRole('button', {name: /Submit/i})
      .should('exist', 'be.disabled')
      cy.findByRole('button', {name: "Voice 💬"}).should('exist') 
    })
//     it('accepts text and submits', () => {
// cy.findByRole('textbox').click().type('I am awesome')

// cy.findByText('I am awesome').should('be.visible')

// cy.findByRole('button', {name: /Submit/i}).click()

// cy.get('h2').contains('Today\'s Entry' )


// cy.findByText('I am awesome').should('be.visible')
//     })
})