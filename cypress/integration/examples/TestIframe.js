/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
describe('My Second Test Suite',function(){

it('My fourth test case',function(){

//  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.visit(Cypress.env('url')+"/AutomationPractice/")
  cy.frameLoaded("#courses-iframe")
  cy.iframe().find("a[href='#/mentorship']").eq(0).click()
  cy.iframe().find(".pricing-title").should('have.length',2)

})
})
 