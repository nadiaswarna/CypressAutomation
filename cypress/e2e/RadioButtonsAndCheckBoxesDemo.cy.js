/// <reference types="cypress" />

describe("Check UI Elements", () => {

  it("Checking Checkbox Buttons", () => {
    cy.visit("https://demoqa.com/checkbox")

  //   parent div visible কিনা
  //  cy.get('.col-md-6 > :nth-child(3) > :nth-child(2)').should('be.visible')

  //   label element visible কিনা
  //  cy.get(':nth-child(3) > .custom-control-label').should("be.visible")

  //   disabled radio-এর container div visible কিনা
  //  cy.get('.custom-control.disabled').should("be.visible")

  //   input (radio) hidden থাকে, তাই এখানে exist ব্যবহার করতে হবে
  //  cy.get('.custom-control-input').should("exist")

  //   input radio select করার জন্য force:true ব্যবহার করতে হবে
  //  cy.get('#yesRadio').check({ force: true }).should('be.checked')
  //  cy.get('#impressiveRadio').check({ force: true }).should('be.checked')

cy.get(':nth-child(1) > label > .rct-checkbox').check().should('be.checked')

    // disabled check
   // cy.get('#noRadio').should('be.disabled')
  })
})


    // selecting radio buttons
    //cy.get("input#male").check().should("be.checked")
    //cy.get("input#female").should("not.be.checked")
    



 



// describe('DemoQA Checkbox Test', () => {
//   it('Select Home → all children checked', () => {
//     cy.visit('https://demoqa.com/checkbox')
//     cy.get('.rct-checkbox')


//     })
//     })
//     // Home expand
//     cy.get('button[aria-label="Toggle"]').first().click()

//     // Home checkbox check
//     cy.contains('label', 'Home')
//       .prev('span')
//       .find('input[type="checkbox"]')
//       .check({ force: true })

//     // কিছু চাইল্ড ভেরিফাই
//     cy.contains('label', 'Desktop')
//       .prev('span')
//       .find('input[type="checkbox"]')
//       .should('be.checked')

//     cy.contains('#result', 'desktop').should('be.visible')
//     cy.contains('#result', 'documents').should('be.visible')
//     cy.contains('#result', 'downloads').should('be.visible')
//   })
// })
