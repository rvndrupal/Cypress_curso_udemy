/// <reference types="Cypress" />

//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'

describe("Curso de Cypress Nivel Intermedio", () =>{

    it("Drag and Drop", () =>{
        let tiempo=600

        cy.visit("https://the-internet.herokuapp.com/drag_and_drop") 
        cy.title().should('eq','The Internet')
        cy.wait(tiempo)

        cy.get("#column-a").drag("#column-b", {force:true})

    });

    it("Mouse Over", () =>{
        let tiempo=600

        cy.visit("http://way2automation.com/") 
        cy.title().should('eq','Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial')
        cy.wait(tiempo)

        cy.contains("Selenium").trigger('mouseover')
        cy.wait(tiempo)
        //explicar lo del tab
        //cy.contains("Selenium Python Video Tutorials").click()
        cy.contains("Selenium Python Video Tutorials").invoke('removeAttr','target').click()

    });

    it("Sliders", () =>{
        let tiempo=600

        cy.visit("https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html") 
        cy.title().should('eq','Selenium Easy - Drag and Drop Range Sliders')
        cy.wait(tiempo)

        cy.get("#slider3 > div > input[type=range]").invoke("attr","value","80")
        cy.wait(tiempo)
        cy.get("#slider6 > .range > input").invoke("attr","value","90")


    });


    it.only("Click Derecho", () =>{
        let tiempo=800

        cy.visit("https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html") 
        cy.title().should('eq','Selenium Easy - Drag and Drop Range Sliders')
        cy.wait(tiempo)

        // cy.contains("Selenium").trigger('mouseover')
        // cy.wait(tiempo)

        cy.get("body > div:nth-child(1) > div:nth-child(2) > nav > div > div.navbar-header > div").rightclick()  
        cy.wait(tiempo)
        cy.contains("Inspeccionar")
        
        


    });


    




});