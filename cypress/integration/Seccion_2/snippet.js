/// <reference types="Cypress" />

//ctrl+ p  >snippet
import 'cypress-file-upload';

describe("Curso de Cypress Nivel Intermedio", () =>{

    it("ejemplo Practico con Snippets", () =>{
        let tiempo=300

        cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html") 
        cy.title().should('eq','HTML Form Elements')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > td > input').should('be.visible').type('Rodrigo')
        cy.wait(tiempo)
        cy.get(':nth-child(2) > td > input').should('be.visible').type('1234')
        cy.wait(tiempo)
        cy.get('textarea').clear().should('be.visible').type('Demo del contenido de ejemplo')
        cy.wait(tiempo)
        const path='img2.jpg';
        cy.get('[type="file"]').attachFile(path);
        cy.wait(tiempo)
        cy.get('[value="cb1"]').check().should('be.checked').and('have.value','cb1')
        cy.wait(tiempo)
        cy.get('[value="rd1"]').check().should('be.checked').and('have.value','rd1')
        cy.wait(tiempo)
        cy.get('table > tbody > tr:nth-child(7) > td > select').select('ms2')
        cy.wait(tiempo)
        cy.get('#HTMLFormElements > table > tbody > tr:nth-child(8) > td > select').select('Drop Down Item 2').should('have.value','dd2')
        cy.wait(tiempo)
        cy.get('[type="submit"]').should('be.visible').click({force: true})
        cy.wait(tiempo)
  
  
    });

   
   

});