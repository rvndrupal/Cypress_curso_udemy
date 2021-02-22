/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Curso de Cypress Nivel Básico", () =>{

    it("Selectores por ID", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')

        cy.get("#firstName").should("be.visible").type("Nombre demo")
    
    });

    it("Selectores por Atributo", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')

        cy.get("[placeholder='Last Name']").should("be.visible").type("Apellido Paterno")
    
    });

   

    it("Selectores por Xpath", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')

        cy.xpath("//input[@id='userEmail']").should("be.visible").type("demo123@gmail.com")
    
    });

    //por la herramienta y por selector


    it("Selectores por contains", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')

        cy.get(".custom-control-label").contains("Female").click().wait(1000)
        cy.get(".custom-control-label").contains("Other").click()

    });


    it("Selectores por witthin", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')

        cy.get('#userForm').within(() => {
            cy.get("[type='text']").should('have.attr', 'placeholder', 'First Name')
        })

    });


    

    



   

});