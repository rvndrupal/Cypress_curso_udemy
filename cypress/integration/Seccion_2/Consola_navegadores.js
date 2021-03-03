/// <reference types="Cypress" />



//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Básico", () =>{

    it("Console run", () =>{

        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('#userName').should("be.visible").type("Juan")
        cy.get('#userEmail').should("be.visible").type("juan@gmail.com")
        cy.get('#currentAddress').should("be.visible").type("Dirección uno")
        cy.get('#permanentAddress').should("be.visible").type("Dirección dos")
        cy.get('#submit').should("be.visible").should("be.enabled").click()
        cy.get('#name').should("include.text", "Juan")

        //Primer comando
        // node_modules\.bin\cypress run   //Lanza todos
        // node_modules\.bin\cypress run --headed  //con el navegador
        // node_modules\.bin\cypress run --browser chrome   //navegador
        // node_modules\.bin\cypress run --spec "cypress\integration\Seccion_1\Asserts_1.js"    //individual test
        // node_modules\.bin\cypress run --spec "cypress\integration\Console\*"   //todos los de una  carpeta
       
      
    });

    
  

  
   

   

});