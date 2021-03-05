/// <reference types="Cypress"  />





//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Seleccionar Elementos de una tabla y de otros campos", () =>{

   

    it("CHILDREN", ()=>{
        let tiempo =500
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)



         cy.get(".btn-group").children('.btn-success')
         //toma al hijo de group
         cy.get(".btn-group").children('.btn-success').should("contain","Green").click()

        
    });

    it("Seleccionar con EQ", ()=>{
        let tiempo =800
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get(".btn-group").children('.btn-success').should("contain","Green").click()
        cy.wait(tiempo)
        cy.get("[type='button']").eq(2).click()
        cy.wait(tiempo)
        cy.get("[type='button']").eq(3).should("contain","Red")
        cy.get("[type='button']").eq(3).click()
    });

    it("Seleccionar con Filter", ()=>{
        let tiempo =800
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").filter('.btn-success')
        cy.wait(tiempo)
        cy.get("[type='button']").filter('.btn-success').click()

        cy.get("[type='button']").filter('.btn-success')
        cy.wait(tiempo)
        cy.get("[type='button']").filter('.btn-default').click()

    });


    it("Seleccionar con Find", ()=>{
        let tiempo =800
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get(".btn-group").find('.btn-success')
        cy.wait(tiempo)
        cy.get(".btn-group").find('.btn-success').click()

        cy.get(".btn-group").find('.btn-success')
        cy.wait(tiempo)
        cy.get(".btn-group").find('.btn-default').click()

    });


    it("Seleccionar con First", ()=>{
        let tiempo =800
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get(".btn-group").first().should("contain","Green")
        cy.wait(tiempo)
        cy.get(".btn-group").first().should("contain","Green").click({force:true})

    });

    it("Seleccionar con Last", ()=>{
        let tiempo =800
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get(".btn-group").last().should("contain","All")
        cy.wait(tiempo)
        cy.get(".btn-group").last().should("contain","All").click({force:true})

    });


    it("Seleccionar los siguientes NextALL", ()=>{
        let tiempo =800
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").should("contain","Green")
        cy.wait(tiempo)
        cy.get("[type='button']").should("contain","Green").nextAll().should("have.length", 4)

    });

    it("Seleccionar al Padre", ()=>{
        let tiempo =800
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html')       
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").parent().should("have.class","btn-group")
        cy.wait(tiempo)
        
       
    });


    


   

    it.only("Seleccionar Todos los Previo", ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("#data-table").invoke('removeAttr','target').click({force:true})
        cy.title().should('eq','WebDriver | Data Tables')
        cy.get(".sales").prevAll().should('have.have.length',2)
        const val=cy.get(".sales").prevAll()
        val.each(($el, index, $list)=>{
            cy.log($el.text()) //chingon obtengo los valores
            cy.log(index)
            cy.log($list)
        })
        
    });

    it("Valor de un tabla", ()=>{
        const datos=[];
        let cantidad=0;
        cy.get("#thumbnail-1 td").each(($el, index, $list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            let i;
            for(i=0; i<datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i]))
                    {
                        cantidad+=Number(datos[i])
                    } 
            }
            cy.log(cantidad)
            cy.log("La cantidad total es: " + cantidad)
            expect(cantidad).to.eq(322)
        })
    });


    it("Valor de un tabla un solo valor", ()=>{
        
        const campo=cy.get("#thumbnail-1 tr td:nth-child(2)")
        
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            if(dato.includes("Woods")){
                campo.eq(index).next().then( age =>{
                    const edad=age.text()
                    cy.log(edad)
                    expect(edad).to.equal('80')
                })
            }
        })
          
    });




    
}) 