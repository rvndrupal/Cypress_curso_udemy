/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Curso de Cypress Nivel Básico", () =>{

    it("Type enter", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Rodrigo {enter}")

    });

    it("Type pageup", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#lastName").should("be.visible").type("Villanueva ")
        cy.get("#currentAddress").should("be.visible").type("Dirección demo")
        cy.get("header > a > img").type("{pageup}")

    });

    it("Type pageDown", () =>{

        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)       
        cy.get("#userName").type("{pageDown}")
    });


    it("Type Tab()", () =>{

        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)       
        cy.get("#userName").type("Usuario uno").tab()
        .type("juan@gmail.com").tab()
        .type("Dirección demo uno").tab()
        .type("Dirección dos").tab()
        .type("#submit").should("be.visible").click()
    });


    it("Type shif + tab", () =>{

        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)       
        cy.get("#userName").type("Usuario uno").tab()
        .type("juan@gmail.com").tab()
        .type("Dirección demo uno").tab()
        .type("Dirección dos").tab()
        .wait(2000)
        .type("Nueva dirección dos").tab({shift: true}).type("Cambio a nueva dirección")
        
    });






   

});