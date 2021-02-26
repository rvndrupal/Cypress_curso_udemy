/// <reference types="Cypress" />



//https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions
//https://www.chaijs.com/


describe("Curso de Cypress Nivel Básico", () =>{

    it("Asert uno", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#firstName').should("be.visible")
        cy.wait(1000)
        cy.get('#firstName').should("be.enabled")
        cy.wait(1000)
        cy.get('#firstName').type("demo contenido")
        cy.wait(1000)
        cy.get('#firstName').clear()
        cy.wait(1000)
        cy.get('#firstName').should('not.have.css','control')
        cy.wait(1000)      
    });

    it("Asert dos", () =>{

        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#gender-radio-1').should("have.value",'Male').wait(500)
        cy.get('#gender-radio-1').should("be.enabled").wait(500)
        cy.get('#gender-radio-1').should("not.have.value",'Fer').wait(500)

    });

    it("Expect", () =>{
        const a=10
        const nom="Juan"
        expect(a).to.equal(10)
        expect(nom).to.equal("Juan")
    });

    it("Expect equal", () =>{
        // cy.visit("https://demoqa.com/text-box")
        // cy.title().should('eq','ToolsQA')
        // cy.wait(1000)
        // cy.get('#userName').expect("class")
        let nom="Rodrigo"
        // let nom=10
        expect(nom).to.not.equal("Pedro")
        expect(nom).to.be.a("String")
        const num=[1,2,3]
        expect (num).to.include(2)
    
    });


    it("Función then", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        const nombre=cy.get('#userName')
        nombre.should("be.visible").clear().should("be.enabled").should("be.empty").then(()=>
            nombre.type("Rodrigo")
        )
        nombre.should("have.css","font-size")   
    
      
    });

    it("Función then", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
         
        cy.get("#userName-label").then((e) =>{
            cy.log(e.text())
            const nom=e.text()
            cy.log(nom)
            const n=cy.get("#userName").type("rodrigo")
            n.should("contain.value", "rodrigo")
        })
    
      
    });


    it("Función invoke", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
         
        cy.get("#userName-label").then((e) =>{
            cy.log(e.text())
            //verifica el invoke sirvio para el atributo a checar muy chingo
            cy.get("#userName").invoke("attr","id").should("contain", "userName").then(() =>{
                cy.get("#userName").type("Rodrigo")
            })

            cy.get("#userEmail").invoke("attr", "placeholder").should("contain","name@example.com").then(()=> {
                cy.get("#userEmail").type("rodrigo@gmail.com")
            })

          
        })
    
      
    });


  
   

   

});