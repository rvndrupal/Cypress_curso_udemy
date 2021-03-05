// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (user, password,tie) => { 
    let tiempo=tie
    cy.get("#txtUsername").should("be.visible").clear()
    cy.wait(tiempo)
    cy.get("#txtPassword").should("be.visible").clear()
    cy.wait(tiempo)
    cy.get("#txtUsername").should("be.visible").type(user)
    cy.wait(tiempo)
    cy.get("#txtPassword").should("be.visible").type(password)
    cy.wait(tiempo)
    cy.get('#btnLogin').should('be.visible').click({force: true})
    cy.wait(tiempo)
 })

 Cypress.Commands.add("bloque_uno", (nom,ap,mail,tel,tie) => { 
    let tiempo=tie
    cy.visit("https://demoqa.com/automation-practice-form",  {failOnStatusCode: false})  
    cy.title().should('eq','ToolsQA')
    cy.get('#firstName').should("be.visible").type(nom)
    cy.wait(tiempo)
    cy.get('#lastName').should("be.visible").type(ap)
    cy.wait(tiempo)
    cy.get('#userEmail').should('be.visible').type(mail)
    cy.wait(tiempo)
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.wait(tiempo)
    cy.get('#userNumber').should('be.visible').type(tel)
    cy.wait(tiempo)
   
 })


 Cypress.Commands.add("bloque_dos", (con,dir,tie) => { 
    let tiempo=tie
    cy.get('.subjects-auto-complete__value-container').should('be.visible').type(con+ "{enter}")
    cy.wait(tiempo)
    cy.get(".custom-control-label").contains('Music').click()
    cy.wait(tiempo)
    const path='img1.jpg';
    cy.get('[type="file"]').attachFile(path);
    cy.wait(tiempo)
    cy.get('#currentAddress').should('be.visible').should('be.enabled').clear().type(dir).tab()
    cy.get("#state").click()
    cy.get("#state").type("NCR"+ "{enter}")
    cy.get("#city").click()
    cy.get("#city").type("Noida"+ "{enter}")
    cy.get("#submit").should("be.visible").click()
    cy.wait(tiempo)

    cy.get("#closeLargeModal").should("be.visible").click({force:true})
   
 })



