/// <reference types="Cypress"  />





//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Videos y screenshots", () =>{

    it("Screenshot", ()=>{
        let tiempo=700
        cy.visit("https://www.seleniumeasy.com/test/bootstrap-dual-list-box-demo.html") 
        cy.title().should('eq','Selenium Easy - Dual List box demo to practice Selenium Webdriver')

        cy.get('.list-left > .well > #listhead > .col-md-10 > .input-group > .form-control').should("be.visible")
        cy.wait(tiempo)
        cy.screenshot("Buscando") 
        cy.get('.list-left > .well > #listhead > .col-md-10 > .input-group > .form-control').should("be.visible").type("Morbi")
        cy.wait(tiempo)
        cy.screenshot("Buscando_Morbi") 
        cy.get('.list-left > .well > #listhead > .col-md-2 > .btn-group > .btn').click()

        //crear video
        //node_modules\.bin\cypress run --spec "cypress\integration\Seccion_2\Video_screenshots.js" 
    });


    





    
}) 