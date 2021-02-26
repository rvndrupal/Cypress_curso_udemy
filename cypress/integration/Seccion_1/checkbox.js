/// <reference types="Cypress" />



//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Básico", () =>{

    it("Checkbox uno", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html") 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)

        cy.get("input[type='checkbox']").check().should("be.checked")
        cy.get("input[type='checkbox']").uncheck().should("not.be.checked")
        
    });

    it("Checkbox dos", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html") 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)

        cy.get("#isAgeSelected").check()
        cy.get(':nth-child(4) > label > .cb1-element').check().should("be.checked")
        cy.get(':nth-child(4) > label > .cb1-element').uncheck().should("not.be.checked")

      
        
    });

    it("Checkbox tres", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html") 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)

      
        cy.get(':nth-child(4) > label > .cb1-element').check().should("be.checked")
        cy.get(':nth-child(5) > label > .cb1-element').check().should("be.checked")
        cy.wait(3000)

        cy.get(':nth-child(5) > label > .cb1-element').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > label > .cb1-element').click()
       
        
    });

    it.only("Radio uno", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(1000)

        cy.get('.panel-body > :nth-child(2) > input').check().should("be.checked")
        cy.get('.panel-body > :nth-child(3) > input').should("not.be.checked")
        cy.get('.panel-body > :nth-child(3) > input').check().should("have.value","Female").then(()=>{
            cy.get('#buttoncheck').click()
        })

        cy.get(".radiobutton").should("have.text", "Radio button 'Female' is checked").then(()=>{
            cy.log("Se oprimio el boton del radio Femenino")
        })
        
    

      
        
        
    });

  




   

});