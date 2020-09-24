/// <reference types="Cypress" />


describe('Mocking API',function(){

it('My fourth test case',function(){
    let message = 'Dimpa this comment does not exist'
cy.visit("https://example.cypress.io/commands/network-requests")
cy.server()
cy.route({
    method: 'PUT',
    url: 'comments/*',
    status: 404,
    response: { error: message },
    delay: 1000,
  }).as('UpdateComment')
  cy.get(".network-put").click()
  cy.get('.network-put-comment').should('contain', message)
 })
})




