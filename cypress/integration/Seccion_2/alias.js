/// <reference types="Cypress" />

//ctrl+ p  >snippet
import 'cypress-file-upload';

describe("Curso de Cypress Nivel Intermedio", () =>{

    it("Each repeticiones", () =>{
        let tiempo=300

        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(tiempo)

        //Darle click por cada opción.
        //cy.get("a[href*='index.php?id_product='").contains("Faded Short Sleeve T-shirts").click()   ok funciona
        cy.get("a[href*='index.php?id_product='").contains("Faded Short Sleeve T-shirts").click()

    });

    it("Each repeticiones dos", () =>{
        let tiempo=300

        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(tiempo)

        cy.get(".product-name").each(($el,index,$list)=>{
            cy.log(index + ":" + $el.text())
        })

  
    });


    

    it("Each repeticiones tres", () =>{
        let tiempo=300
        let dato

        cy.visit("http://automationteststore.com") 
        cy.title().should('eq','A place to practice your automation skills!')
        cy.wait(tiempo)

        cy.get(".fixed_wrapper .prdocutname").each(($el,index,$list)=>{
         
            if($el.text().includes("Skinsheen Bronzer Stick")){
                cy.wrap($el).click()
            }
           
            
        })

    });


    it("Each repeticiones cuatro", () =>{
        let tiempo=300
        let dato

        cy.visit("http://automationteststore.com") 
        cy.title().should('eq','A place to practice your automation skills!')
        cy.wait(tiempo)

        for(let i=0; i<3; i++){
            cy.get(".fixed_wrapper .prdocutname").eq(i).click()
            cy.wait(1500)
            cy.get('#product_quantity').should('be.visible').clear().type('4')
            cy.wait(1000)
            cy.get("#product > fieldset > div:nth-child(4) > ul > li > a").click()
            cy.wait(1000)

            cy.wait(tiempo)
            cy.get(".menu_home").click()
            //muy chingon
        }

        

    });

    




});