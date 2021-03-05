/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')
import 'cypress-file-upload';

//ir a cypress.json
// "chromeWebSecurity": false,


describe("Creando nuestro propios comandos.", () =>{

  Cypress.config('defaultCommandTimeout', 30000) //muy bueno


  it("Bloque uno ", () =>{
    let tiempo=100

    cy.visit("https://demoqa.com/automation-practice-form",  {failOnStatusCode: false})  
    cy.title().should('eq','ToolsQA')
    cy.get('#firstName').should("be.visible").type("Pedro")
    cy.wait(tiempo)
    cy.get('#lastName').should("be.visible").type("Chavez")
    cy.wait(tiempo)
    cy.get('#userEmail').should('be.visible').type('pedro@gmail.com')
    cy.wait(tiempo)
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.wait(tiempo)
    cy.get('#userNumber').should('be.visible').type('554789578')
    cy.wait(tiempo)
    cy.get('.subjects-auto-complete__value-container').should('be.visible').type('Commerce'+ "{enter}")
    cy.wait(tiempo)
    cy.get(".custom-control-label").contains('Music').click()
    cy.wait(tiempo)
    const path='img1.jpg';
    cy.get('[type="file"]').attachFile(path);
    cy.wait(tiempo)
    cy.get('#currentAddress').should('be.visible').should('be.enabled').clear().type('Demo del contenido').tab()
    cy.get("#state").click()
    cy.get("#state").type("NCR"+ "{enter}")
    cy.get("#city").click()
    cy.get("#city").type("Noida"+ "{enter}")
    cy.get("#submit").should("be.visible").click()
    cy.wait(tiempo)

    cy.get("#closeLargeModal").should("be.visible").click({force:true})
     

  })


  it("Custom ", () =>{    

    cy.bloque_uno("rodrigo","villanueva","rodrigo@gmail.com","5345345",500)
    cy.bloque_dos("Commerce","Dirección dos",500)
     
  })

  it("Custom dos ", () =>{    

    cy.bloque_uno("Erika","Paz","rodrigo@gmail.com","5345345",100)
    cy.bloque_dos("Commerce","Demo del contenido",10)
     
  })


  



 
}) 