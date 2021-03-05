/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Hooks Caso practico no te repitas", () =>{


  before(() => {
    cy.log("Esto se repite en cada uno de los test muy importante")
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html") 
    cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
    cy.wait(500)
  })

    
  it("Checkbox uno", () =>{
    cy.get("input[type='checkbox']").check().should("be.checked")
    cy.get("input[type='checkbox']").uncheck().should("not.be.checked")
    
  });

  it("Checkbox dos", () =>{
      cy.get("#isAgeSelected").check()
      cy.get(':nth-child(4) > label > .cb1-element').check().should("be.checked")
      cy.get(':nth-child(4) > label > .cb1-element').uncheck().should("not.be.checked")
  });

  it("Checkbox tres", () =>{
    
      cy.get(':nth-child(4) > label > .cb1-element').check().should("be.checked")
      cy.get(':nth-child(5) > label > .cb1-element').check().should("be.checked")
      cy.wait(3000)

      cy.get(':nth-child(5) > label > .cb1-element').click()
      cy.wait(1000)
      cy.get(':nth-child(5) > label > .cb1-element').click()
    
      
  });




    
}) 