/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Curso de Cypress Nivel Básico", () =>{

    it("Selectores por ID", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#txtUsername").clear().tab().clear()
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1500)

        let user=cy.get("#spanMessage").should("be.visible")
        if(user){
            cy.get("#txtUsername").type("admin")
            cy.get("#btnLogin").should("be.visible").click()
        }
        let password=cy.get("#spanMessage").contains("Password cannot be empty")
        if(password){
            cy.wait(1500)
            cy.get("#txtPassword").should("be.visible").type("admin123").tab().click()
        }
        cy.log("Listo formulario Validado")

    

    });



   

});