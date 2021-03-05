/// <reference types="Cypress"  />





//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Reto sacar los valores de una Tabla", () =>{

    it("Mostrando los campos", ()=>{
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html") 
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
        const datos=[];
        let cantidad=0;
        cy.get(".odd td").each(($el, index, $list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            let i;
            for(i=0; i<datos.length; i++){
                cy.log(datos[i])
                // if(Number(datos[i]))
                //     {
                //         cantidad+=Number(datos[i])
                //     } 
            }
            // cy.log(cantidad)
            // cy.log("La cantidad total es: " + cantidad)
            // expect(cantidad).to.eq(202)
        })
    });


    

    it("Valor de una tabla", ()=>{
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html") 
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
        const datos=[];
        let cantidad=0;
        cy.get(".odd td").each(($el, index, $list)=>{
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
            expect(cantidad).to.eq(202)
        })
    });


    it("Valor de un tabla un solo valor", ()=>{
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html") 
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')   

        const campo=cy.get(".odd td:nth-child(2)")
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato)
            if(dato.includes("Javascript Developer")){
                campo.eq(index).next().next().then( age =>{
                    const edad=age.text()
                    cy.log(edad)
                    expect(edad).to.equal('39')
                })
            }
        })
          
    });




    
}) 