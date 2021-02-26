/// <reference types="Cypress" />



//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Básico", () =>{

    it("Select uno", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        //Eleiminar mensaje uno
        // cy.on('window:confirm', (str) =>{
        //     return true; //Verdad
        // }) no funciono pero ponerlo
        cy.get(".at-cv-button").should("be.visible").last().click({ force: true })

        cy.get('.form-group > #user-message').should("be.visible").should("be.enabled").type("Primer mensaje de prueba")
        cy.get('#get-input > .btn').should("be.visible").click()

        cy.get("#sum1").should("be.visible").type("5")
        cy.get('#sum2').should("be.visible").type("5")
        cy.get('#gettotal > .btn').should("be.visible").should("be.enabled").click().then(()=>{
            
            cy.get('#displayvalue').should("contain","10")
          
        })
       

        
    });

    it("Select dos", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        //Eleiminar mensaje uno
        // cy.on('window:confirm', (str) =>{
        //     return true; //Verdad
        // }) no funciono pero ponerlo
        cy.get(".at-cv-button").should("be.visible").last().click({ force: true })

        cy.get('.form-group > #user-message').should("be.visible").should("be.enabled").type("Primer mensaje de prueba")
        cy.get('#get-input > .btn').should("be.visible").click()

        // cy.get("#sum1").should("be.visible").type("5")
        // cy.get('#sum2').should("be.visible").type("5")
        cy.get('#gettotal > .btn').should("be.visible").should("be.enabled").click()
            
        cy.get('#displayvalue').should("contain","NaN").then(()=>{
            cy.get("#sum1").should("be.visible").type("5")           
            cy.get('#gettotal > .btn').should("be.visible").should("be.enabled").click()
        })

        cy.get('#displayvalue').should("contain","NaN").then(()=>{
            cy.get("#sum2").should("be.visible").type("10")           
            cy.get('#gettotal > .btn').should("be.visible").should("be.enabled").click()
        })
    
       

        
    });




   

});