/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Campos tipo fecha", () =>{

    it("Fecha Uno", () =>{
        let tiempo=600

        cy.visit("https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html") 
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)


        cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("09/10/2020").then(()=>{
            cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type('{esc}')
        })
      
       

    });

    it("Fecha Dos", () =>{
        let tiempo=600

        cy.visit("https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html") 
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)


        cy.get('[placeholder="Start date"]').should("be.visible").type("20/10/2018").type('{esc}')
        cy.wait(tiempo)
        cy.get('[placeholder="End date"]').should('be.visible').type('10/12/2020').type('{esc}')
       

    });

    it("Fecha Tres", () =>{
        let tiempo=600

        cy.visit("https://www.seleniumeasy.com/test/jquery-date-picker-demo.html") 
        cy.title().should('eq','Selenium Easy - JQuery Date picker demo')
        cy.wait(tiempo)

        cy.get("#from").should("be.visible").type('20/09/2019').type('{esc}').tab().type('20/09/2021').type('{esc}')


    });






    





    
}) 