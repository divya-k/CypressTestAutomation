/// <reference types="Cypress" />


describe('My Second Test Suite',function(){

it('My first test case',function(){

  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".search-button").click();
    cy.wait(1000);

    cy.get(".products").as('productLocator')
       cy.get("@productLocator").find(".product")
   .each(($el, index, $list) => {
     // $el is a wrapped jQuery element
     const vegText=$el.find('h4.product-name').text()
     if (vegText.includes('Cashews') ) {
       // wrap this element so we can
       // use cypress commands on it
       $el.find('button').click();
     }
   })

   cy.get("img[alt='Cart']").click()
   cy.contains('PROCEED TO CHECKOUT').click()
   
   cy.contains('Place Order').click()


}
)
})