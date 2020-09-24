/// <reference types="Cypress" />


describe('My First Test Suite',function(){

it('My first test case',function(){

  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".search-button").click();
    cy.wait(1000);
   cy.get(".product:visible").should('have.length',4);
   cy.wait(1000);
   cy.get(".products").as('productLocator')
   //cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
   cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click().then(function(){
     console.log('hibye')
   });
   cy.wait(1000);

   cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

   cy.get(".products").find(".product")
   .each(($el, index, $list) => {
     // $el is a wrapped jQuery element
     const vegText=$el.find('h4.product-name').text()
     if (vegText.includes('Cashews') ) {
       // wrap this element so we can
       // use cypress commands on it
       $el.find('button').click();
     }
   })

 //Assert if the logo text is correctly displayed
 cy.get('.brand').should('have.text','GREENKART')

   //this is to print in the logs
   cy.get(".brand").then(function(logoelement)
   {
     cy.log(logoelement.text())
   })
}
)
})