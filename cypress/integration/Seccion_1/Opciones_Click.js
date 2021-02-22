/// <reference types="Cypress" />



describe("Curso de Cypress Nivel Básico", () =>{

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


    it.only("Click Coordenadas (x,y)", () =>{
       
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(2000)
        cy.get('.page-title').should("be.visible").click(50,50)
        
    });
   

   

});