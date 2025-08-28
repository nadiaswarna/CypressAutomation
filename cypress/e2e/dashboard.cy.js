// File: cypress/e2e/dashboard.cy.js

describe('nTouch Dev Dashboard Test', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';

  // Reusable login function
  const login = () => {
    const username = Cypress.env('username') || 'demo1@gmail.com';
    const password = Cypress.env('password') || '1q2w3E*';

    cy.visit('https://dev.ntouch.ai/dashboard');

    cy.get(loginEmail, { timeout: 10000 }).should('be.visible').clear().type(username);
    cy.get(loginPassword, { timeout: 10000 }).should('be.visible').clear().type(password, { log: false });
    cy.get(loginButton, { timeout: 10000 }).should('be.visible').click();

    // Verify successful login
   
  };

  beforeEach(() => {
    login();
  });

  it('should display dashboard main elements', () => {
    // Check if header is visible
    //cy.get('header', { timeout: 10000 }).should('be.visible');

    // Check if sidebar exists
    //cy.get('aside', { timeout: 10000 }).should('be.visible');

    // Check if main content area is visible
   // cy.get('main', { timeout: 10000 }).should('be.visible');
  });

  it('should navigate to different dashboard sections', () => {
    // Example: Click a sidebar link
  //  cy.get('aside').contains('Users').click({ force: true });

    // Verify navigation
   // cy.url({ timeout: 10000 }).should('include', '/dashboard/users');
  });

  it('should logout successfully', () => {
    // Assuming logout button is in header
   // cy.get('header').contains('Logout').click({ force: true });

    // Verify redirect to login page
    cy.url({ timeout: 10000 }).should('include', '/account/login');
  });
});
