/// <reference types="Cypress" />



//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Básico", () =>{

    it("Windows document", () =>{

        cy.visit("https://testsheepnz.github.io/random-number.html") 
        cy.title().should('eq','The Number Game')
        cy.wait(1500)
        cy.document().should("have.property","charset").and('eq','UTF-8')
        //Verifica si el documento tiene charset y utf-8
      
    });

    it("Windows title", () =>{

        cy.visit("https://testsheepnz.github.io/random-number.html") 
        cy.title().should('eq','The Number Game')
        cy.wait(1500)
       // cy.document().should("have.property","charset").and('eq','UTF-8')
        cy.title().should("include","The Number")
      
    });

    it("Windows url", () =>{

        cy.visit("https://testsheepnz.github.io/random-number.html") 
        cy.title().should('eq','The Number Game')
        cy.wait(1500)
        cy.url().should("include","random-number.html") //un pedaso
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html")//todo
        
      
    });

  

  
   

   

});