/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Creando nuestro propios comandos.", () =>{

  Cypress.config('defaultCommandTimeout', 30000) //muy bueno


  it("Login uno", () =>{
    let tiempo=800

    cy.log("Esto se repite en cada uno de los test muy importante")
    cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/",  {failOnStatusCode: false})  
    cy.title().should('eq','OrangeHRM')
    cy.get("#btnLogin").should("be.visible").click()

  })

  it("Login dos", () =>{
    let tiempo=800

    cy.log("Esto se repite en cada uno de los test muy importante")
    cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/",  {failOnStatusCode: false})  
    cy.title().should('eq','OrangeHRM')
    cy.get("#txtUsername").should("be.visible").clear()
    cy.wait(tiempo)
    cy.get("#txtPassword").should("be.visible").clear()
    cy.wait(tiempo)
    cy.get("#txtUsername").should("be.visible").type("admin")
    cy.wait(tiempo)
    cy.get("#txtPassword").should("be.visible").type("admin123")
    cy.wait(tiempo)
    cy.get('#btnLogin').should('be.visible').click({force: true})
    cy.wait(tiempo)

  })

  it("Login tres custom", () =>{
    cy.log("Esto se repite en cada uno de los test muy importante")
    cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/",  {failOnStatusCode: false})  
    cy.title().should('eq','OrangeHRM')
    cy.login("admin","admin123",800)

  })




 
}) 