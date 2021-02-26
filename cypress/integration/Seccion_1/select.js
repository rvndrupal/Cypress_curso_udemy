/// <reference types="Cypress" />



//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Básico", () =>{

    it("Select uno", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)
        cy.get('#select-demo').should("be.visible").select("Monday").wait(2000)
        cy.get('#select-demo').should("be.visible").select("Wednesday").wait(2000)

        
    });

    it("Select dos", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)
        cy.get('#select-demo').should("be.visible").select("Monday").should("have.value","Monday").wait(1000)
        cy.get('#select-demo').should("be.visible").select("Wednesday").should("have.value","Wednesday").wait(2000)
        cy.get('#select-demo').should("be.visible").select("Wednesday").contains("Wed")

        
    });

    it("Select tres", () =>{

        cy.visit("https://www.google.com/") 
        cy.title().should('eq','Google')
        cy.wait(1000)

        cy.get('.gLFyf').should("be.visible").type("Ferrari").type("{enter}")
  
    });


    it.only("Select multiselect", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)
       cy.get("#multi-select").should("be.visible").select(["California","Florida","Washington"]).then(()=>{
           cy.get("#printMe").should("be.visible").click()
       })

        
    });




   

});