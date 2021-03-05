/// <reference types="Cypress"  />





//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Seguridad Https", () =>{

    it("Https uno", () =>{
        let tiempo=600

        cy.visit("https://www.banamex.com/") 
        cy.title().should('eq','Banco Nacional de México | Citibanamex')
        cy.wait(tiempo)

        cy.get('.cookie-content > button.cbx-icon > .icon-close-o').click()
        cy.get('[data-collapse="1"] > .cbx-link > p').click()

       

    });

   


    





    
}) 