/// <reference types="Cypress"  />





//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Alias", () =>{

    it("Alias uno", () =>{
        let tiempo=600

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.get("#firstname").should("be.visible").as("nombre")

        cy.get("@nombre").should("be.enabled").type("Juan")

    });


    it("Alias dos", () =>{
        let tiempo=800

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.get("#firstname").should("be.visible").as("nombre")
        cy.get("#surname").should("be.visible").as("ap")
        cy.get("#age").should("be.visible").as("edad")
        cy.get("#country").should("be.visible").as("pais")
        cy.get("#notes").should("be.visible").as("notas")
        cy.get("[type='submit']").should("be.visible").as("enviar")


        cy.get("@nombre").type("Juan")
        cy.get("@ap").type("Perez Chavez")
        cy.get("@edad").type("40")
        cy.get("@pais").select("Mexico").should("have.value","Mexico")
        cy.get("@notas").type("Esta es la nueva nota")
        cy.get("@enviar").click().then(()=>{
            cy.log("Formulario cargado correctamente")
        })



    });

   


    





    
}) 