/// <reference types="Cypress" />







//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Intermedio", () =>{

    it("Promesas Then", () =>{

        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(1000)

       

        cy.get("#block_top_menu").contains("Women").click().then(()=>{
           
            cy.log("Click en Mujer")
            cy.get('.category-name').should("be.visible")
            cy.get('.category-name').should("contain.text","Women")
            cy.get('#layered_category_4').check()
           
        })
       
      
    });

    it("Promesas Then2", () =>{

        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(1000)

       

       cy.get("#block_top_menu > ul > li:nth-child(2) > a").click().then(($val)=>{
           const dato=$val.text()
           cy.log(dato)
           cy.get(".category-name").contains("Dresses")
           cy.get(".rte").contains("We offer dresses for every day")
           cy.get('#layered_id_attribute_group_2').check()
           cy.get('#selectProductSort').select("Price: Lowest first").should("have.value","price:asc")

          
       })
       
      
    });

   

});