/// <reference types="Cypress"  />





//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Multiples Tabs", () =>{

    it("Tabs", () =>{
        let tiempo=600

        cy.visit("http://way2automation.com/") 
        cy.title().should('eq','Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial')
        cy.wait(tiempo)

        cy.contains("Selenium").trigger('mouseover')
        cy.wait(tiempo)
        //explicar lo del tab
        //cy.contains("Selenium Python Video Tutorials").click()
        cy.contains("Selenium Python Video Tutorials").invoke('removeAttr','target').click()

    });

   


    





    
}) 