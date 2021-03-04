/// <reference types="Cypress" />



describe("Curso de Cypress Nivel Intermedio", () =>{

    it("Variables", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        cy.get(".at-cv-button").should("be.visible").last().click({ force: true })

        const mensaje=cy.get('.form-group > #user-message')
        mensaje.type("Nuevo mensaje") //se tiene que usar luego luego despues de la variable
        cy.get('.form-group > #user-message').click()
       
      
    });

    it.only("Variables dos", () =>{

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        cy.get(".at-cv-button").should("be.visible").last().click({ force: true })

        const a=10
        const b=20
        cy.get('#sum1').type(a)
        cy.get('#sum2').type(b)
        cy.get('#gettotal > .btn').click()

        cy.get('#displayvalue').then((val)=>{
            const r=val.text()
            cy.log(r)
            if(r==30){
                cy.log("el resultado es 30")
            }else{
                cy.log("El resultado es diferente a 30")
            }
            expect(r).is.eq("30")
        })
      
    });



   

});