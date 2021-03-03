/// <reference types="Cypress" />







//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Intermedio", () =>{

    it("Comandos Chain Select", () =>{

        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(1000)

        //por selector
        cy.get("#block_top_menu > ul > li:nth-child(1) > a").click()
      
    });


    it("Comandos Chain Contains", () =>{

        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(1000)

        //por contenido bloque general #
        cy.get("#block_top_menu").contains("Women").click()
      
    });
    

    it("Comandos Chain Find", () =>{

        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(1000)

        cy.get(".product-container").find(".product-name").eq(1).click()
      
    });

   

  
   

   

});