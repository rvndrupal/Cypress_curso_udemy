/// <reference types="Cypress" />

describe("Curso de Cypress Nivel Básico", () =>{

    it("Mi primer Test", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click()
        cy.get("#userName").should("be.visible").type("Rodrigo")
        cy.get("#userEmail").type("rodrigo123@gmail.com")
        cy.get("#currentAddress").type("Demo del contenido uno")
        cy.wait(2000)
        cy.get("#permanentAddress").should("be.visible").type("Dirección de ejemplo")
        cy.wait(1000)
        cy.get("#submit").click()

        //validando
        cy.get("#output").contains("Current Address :Demo del contenido uno")
        cy.log("Listo fin del Test")
       
    });

   

});