/// <reference types="Cypress" />



describe("Curso de Cypress Nivel Básico", () =>{

    it("Mi primer Test", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')

    });

    it("Segundo Test", () =>{
        cy.visit("https://automationteststore.com/") 
        cy.wait(2000)
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').should("be.visible").click()
        cy.title().should('eq','Men')

    });

    it("Terce test", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.get("#btnLogin").should("be.visible").click()

    });

   

});