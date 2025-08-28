/// <reference types="cypress" />


it('Dynamic dropdown', ()=>{

  cy.visit("https://www.google.com/")

  cy.get('#APjFqb').type('cypress automation')
  cy.wait(3000)

  //cy.get('#ERWdKc > .wM6W7d > span')
  cy.get('#ERWdKc .wM6W7d span', { timeout: 10000 })

  cy.get('#ERWdKc > .wM6W7d>span').each( ($el, index, $list)=>{
    if($el.text()=='cypress automation')
    {
      cy.wrap($el).click()
    }
  })

  cy.get('#APjFqb').should('have.value','cypress automation')

})