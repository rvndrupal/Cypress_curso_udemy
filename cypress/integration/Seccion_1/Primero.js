/// <reference types="Cypress" />

describe("Curso de Cypress Nivel Básico", () =>{

    it("Mi primer Test", () =>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click()
        cy.get("#userName").should("be.visible").type("Rodrigo")
        cy.get("#userEmail").type("rodrigo123@gmail.com")
        cy.get("#currentAddress").type("Demo del contenido uno")
        cy.wait(2000)
        cy.get("#permanentAddress").should("be.visible").type("Dirección de ejemplo")
        cy.wait(1000)
        cy.get("#submit").click()

        //validando
        cy.get("#output").contains("Current Address :Demo del contenido uno")
        cy.log("Listo fin del Test")
       
    });

    //Para probar parallel
    it("Click", () =>{

        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.get('#menu_admin_viewAdminModule > :nth-child(1)').click()
        cy.get('#menu_admin_Job > .collapsible-header > .left-menu-title').should("be.visible").click()
        

    });


    it("Click Force true", () =>{

       
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(500)
        cy.get('#menu_admin_viewAdminModule > :nth-child(1)').click()
        cy.wait(500)
        cy.get('#menu_admin_Job > .collapsible-header > .left-menu-title').should("be.visible").click()
        cy.wait(500)
        cy.get('#menu_admin_viewJobTitleList').should("be.visible").click({ force: true })
        

    });

    it("Click topRight", () =>{

       
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(2000)
        cy.get('#menu_pim_viewMyDetails > .left-menu-title').should("be.visible").click("topRight")
        
    });


    it("Click Coordenadas (x,y)", () =>{
       
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(2000)
        cy.get('.page-title').should("be.visible").click(50,50)
        
    });
   


   

});