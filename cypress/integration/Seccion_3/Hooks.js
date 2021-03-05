/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Hooks", () =>{

    before(() => {
        cy.log("Esto inicía antes que todo solo una vez")
      })
    
      beforeEach(() => {
        cy.log("Esto se repite en cada uno de los test muy importante")
      })
    
    
      afterEach(() => {
        cy.log("Esto se hace al final de todos los test")
      })

      after(() => {
        cy.log("################# Final de todo ###################")
      })
    

      it("test uno", () =>{
        cy.log("test uno")
    
      })

      it("test dos", () =>{
        cy.log("test dos")
    
      })





    
}) 