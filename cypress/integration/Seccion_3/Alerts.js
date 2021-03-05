/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Alertas", () =>{

    it("Alerta uno", () =>{
        let tiempo=600

        cy.visit("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(tiempo)

        cy.get(":nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle='modal']").should("be.visible").click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('This is the place where the content for the modal dialog displays')
          
        })
       

    });


    it("Alerta dos", () =>{
        let tiempo=600

        cy.visit("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(tiempo)

        cy.get("[href='#myModal']").should("be.visible").click()

        cy.on('window:alert', (str) =>{
            expect(str).contains('Click launch modal button to launch second modal.')
            return true; 
        })

        cy.get("#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").should("be.visible").click({force:true})
       

    });
    





    
}) 