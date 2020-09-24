/// <reference types="Cypress" />


describe('My Second Test Suite',function(){

it('My fourth test case',function(){

  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

 //cy.get(".mouse-hover-content").invoke('show')
 cy.contains('Top').click({force: true})
 cy.url().should('include','top')
 })
})




