/// <reference types="Cypress" />



describe("Curso de Cypress Nivel Básico", () =>{

    it("Mi primer Test", () =>{

        let nom="Juan"
        let ap="Perez"
        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").type("Juan")
        cy.get('#lastName').should("be.visible").should("be.empty").should("be.enabled").type("Perez")

        cy.get('#firstName').should("be.visible").type(nom)
        cy.get('#lastName').should("be.visible").should("be.empty").should("be.enabled").type(ap)

    });

   

   

});