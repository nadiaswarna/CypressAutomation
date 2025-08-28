// File: cypress/e2e/booking.cy.js

describe('nTouch Dev Booking Page Test', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';

  // Reusable login function
  const login = () => {
    const username = Cypress.env('username') || 'demo1@gmail.com';
    const password = Cypress.env('password') || '1q2w3E*';

    cy.visit('https://dev.ntouch.ai/booking');

    cy.get(loginEmail, { timeout: 10000 }).should('be.visible').clear().type(username);
    cy.get(loginPassword, { timeout: 10000 }).should('be.visible').clear().type(password, { log: false });
    cy.get(loginButton, { timeout: 10000 }).should('be.visible').click();
  };

  beforeEach(() => {
    login();
    cy.visit('https://dev.ntouch.ai/booking');
    cy.url().should('include', '/booking');
  });

  // 1. Verify booking page loads
  it('should display booking page header', () => {
    cy.get('h1, h2').should('contain.text', 'Booking');
  });

  // 2. Verify booking form is visible
  it('should display booking form', () => {
    cy.get('form').should('be.visible');
    cy.get('button:contains("Accept")').click()
    cy.get('#search')
   
  });

  // 3. Verify date picker is working
  //it('should allow selecting a booking date', () => {
  //  cy.get('input[type="date"]').should('be.visible').click().type('2025-08-20');
  });

  // 4. Verify time selection works
  //('should allow selecting a booking time', () => {
    //cy.get('input[type="time"]').should('be.visible').type('10:30');
  //});

  // 5. Verify service dropdown works
 // it('should display and select a service from dropdown', () => {
    //cy.get('select').should('be.visible').select(1);
  //});

  // 6. Verify number of guests input works
  //it('should allow entering number of guests', () => {
    //cy.get('input[name="guests"]').should('be.visible').clear().type('4');
 // });

  // 7. Verify special request textarea works
  //it('should allow entering special requests', () => {
   // cy.get('textarea[name="specialRequest"]').should('be.visible').type('Need window seat');
  //});

  // 8. Verify booking submission
  // it('should submit booking form successfully', () => {
  //   cy.get('form').within(() => {
  //     cy.get('input[type="date"]').type('2025-08-25');
  //     cy.get('input[type="time"]').type('14:00');
  //     cy.get('select').select(1);
  //     cy.get('input[name="guests"]').clear().type('3');
  //     cy.get('textarea[name="specialRequest"]').type('Birthday celebration');
  //     cy.get('button[type="submit"]').click();
  //   });
  //   cy.get('.success-message, .alert-success', { timeout: 10000 }).should('be.visible');
  // });

  // 9. Verify validation for empty form
  // it('should show validation error if required fields are empty', () => {
  //   cy.get('button[type="submit"]').click();
  //   cy.get('.error-message, .alert-danger').should('be.visible');
  // });

   //10. Verify booking cancellation flow
  // it('should allow cancelling a booking', () => {
  //   cy.get('.booking-list .booking-item').first().within(() => {
  //     cy.contains('Cancel').click({ force: true });
  //   });
  //   cy.get('.confirmation-dialog button.confirm').click();
  //   cy.get('.alert-success, .success-message', { timeout: 10000 }).should('be.visible');
  // });

//});
