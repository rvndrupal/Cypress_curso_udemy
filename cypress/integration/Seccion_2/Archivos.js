/// <reference types="Cypress" />

//cypress-file-upload
//https://www.npmjs.com/package/cypress-file-upload
import 'cypress-file-upload';

describe("Curso de Cypress Nivel Intermedio", () =>{

    it("ejemplo Practico con Snippets", () =>{

        cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html") 
        cy.title().should('eq','HTML Form Elements')
        cy.wait(1000)

    //    const path='img1.jpg';
    //    cy.get("[type='file']").attachFile(path);

       const path='img2.jpg';
       cy.get('[type="file"]').attachFile(path);

      
    });

   



   

});