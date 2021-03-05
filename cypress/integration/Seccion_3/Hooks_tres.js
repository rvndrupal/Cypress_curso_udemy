/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Hooks Caso practico no te repitas", () =>{


  beforeEach(() => {
    cy.log("Esto se repite en cada uno de los test muy importante")
    cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/",  {failOnStatusCode: false})  //truco para que ignore cualquier detalle 
    cy.title().should('eq','OrangeHRM')
    cy.get("#btnLogin").should("be.visible").click()
    cy.wait(1000)
  })

    
  it("My info", () =>{
    cy.wait(4000)
    cy.get('#menu_pim_viewMyDetails > .left-menu-title').should("be.visible").click({force:true})
    cy.wait(12000)
    cy.get('#firstName').should("be.visible").clear().type("Juan")
    cy.get('#militaryService').should("be.visible").clear().type("Servicio Militar")
    
  });

  it("Leave", () =>{
    cy.wait(4000)
    cy.get(".left-menu-title").contains("Leave").click()
    cy.wait(2000)
    cy.get(".left-menu-title").contains("Apply").click()
    cy.wait(4000)
    cy.get("#comment").should("be.visible").type("Esto es un comentario para la demostración")
    
  });






    
}) 