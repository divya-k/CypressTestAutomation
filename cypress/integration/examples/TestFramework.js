/// <reference types="Cypress" />


import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
describe('My Second Test Suite',function(){

  before(function(){
    cy.fixture('example').then(function(data){
      this.data=data
    })

  })
it('My first test case',function(){

  Cypress.config('defaultCommandTimeout', 8000)
    const homePage = new  HomePage()
    const productsPage = new  ProductsPage()
 // cy.visit("https://rahulshettyacademy.com/angularpractice/")
 cy.visit(Cypress.env('url')+"/angularpractice/")
  homePage.getEditBox().type(this.data.name)
  homePage.getGender().select(this.data.gender)
  homePage.getTwoWayDataBinding().should('have.value',this.data.name)
  homePage.getEditBox().should('have.attr','minlength',2)
  homePage.getEnterpreneur().should('be.disabled')
 // cy.pause()
  homePage.getShopTab().click()

 // const array1 = ['a', 'b', 'c'];
//array1.forEach(element => console.log(element));

this.data.productName.forEach(function(element) {
  cy.selectProduct(element)
 })
       
 productsPage.getCheckout().click()

var sum=0

cy.get("td:nth-child(4) strong").each(($el, index, $list) => {

  const amount=$el.text()
  var res=amount.split(" ")
  res=res[1].trim()
  sum=Number(sum)+Number(res)
  }).then(function(){
    cy.log(sum)

  })

cy.get("h3 strong").then(function(element){
  const totalAmount=element.text();
  var totalAmount1=totalAmount.split(" ")
  totalAmount1=totalAmount1[1].trim()
  expect(Number(totalAmount1)).to.equal(sum)
})
 cy.contains("Checkout").click()

 //can add this timeout config at the  beginning or from the step u feel is esssential

 Cypress.config('defaultCommandTimeout', 8000)
 cy.get("#country").type("india")
 cy.get("div.suggestions > ul > li > a").click()
 cy.get("#checkbox2").click({force: true})
 cy.get("input[type='submit']").click()

 //cy.get(".alert").should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

 cy.get(".alert").then(function(element){
   const etext=element.text();
   expect(etext.includes("Success")).to.be.true
 })
  })
})


