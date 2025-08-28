/// <reference types="cypress" />

describe('PMS Reservation Page Tests', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';

  const username = Cypress.env('username') || 'demo1@gmail.com';
  const password = Cypress.env('password') || '1q2w3E*';

  beforeEach(() => {
    // Login first
    cy.visit('https://dev.ntouch.ai/account/login');

    cy.get(loginEmail, { timeout: 10000 }).clear().type(username);
    cy.get(loginPassword, { timeout: 10000 }).clear().type(password, { log: false });

    cy.get(loginButton, { timeout: 20000 })
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .click();

    // Ensure redirect successful
    cy.url({ timeout: 20000 }).should('include', '/dashboard');

    // Navigate to Reservation page
    cy.visit('https://dev.ntouch.ai/booking');
    cy.url({ timeout: 20000 }).should('include', '/booking');
  });

  it('should display reservation page header and controls', () => {
    cy.contains('Reservation', { timeout: 20000 }).should('be.visible');

    // Calendar navigation buttons
   cy.get('.fc-today-button').should('exist');
    cy.get('.fc-resourceTimelineWeek-button').should('exist');
    cy.get('.fc-resourceTimeline15Days-button').should('exist');

    // Import & New Booking buttons
   cy.get('.col-5 > .form-check > .form-check-label').should('exist');
    cy.get('#search').should('exist');
    cy.contains('Deluxe').should('exist');
  });

  it('should verify calendar headers and available rooms row', () => {
    // Check date headers
    cy.get('.fc-day-today > .fc-timeline-slot-frame > .fc-timeline-slot-cushion').should('exist');
    cy.get(':nth-child(1) > [data-date="2025-08-21T00:00:00"] > .fc-timeline-slot-frame > .fc-timeline-slot-cushion').should('exist');

    // Verify Available Rooms per Day row
    cy.contains('Available Rooms per Day').should('be.visible');
      cy.contains('168').should('exist');
      cy.contains('175').should('exist');
    });
  });

//   it('should verify room type and price cells', () => {
//     // Check room type row
//     cy.contains('tr', 'One bedroom and a hall').should('be.visible');

//     // Verify Room 1 has price 100.00
//     cy.contains('tr', '1').within(() => {
//       cy.contains('100.00').should('exist');
//     });
//   });

//   it('should open booking modal when New Booking clicked', () => {
//     cy.contains('button', 'New Booking').click();

//     // Expect booking modal/dialog to appear
//     cy.get('.modal, .dialog, [role="dialog"]', { timeout: 10000 })
//       .should('be.visible');
//   });

