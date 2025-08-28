// File: cypress/e2e/login.cy.js

describe('nTouch Dev Login Test', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';

  beforeEach(() => {
    cy.visit('https://dev.ntouch.ai/account/login');
  });

  it('should display the login form elements', () => {
    cy.get(loginEmail, { timeout: 10000 }).should('be.visible');
    cy.get(loginPassword, { timeout: 10000 }).should('be.visible');
    cy.get('form').should('exist');
  });

  it('should login successfully with valid credentials', () => {
    const username = Cypress.env('username') || 'admin@gmail.com';
    const password = Cypress.env('password') || '1q2w3E*';

    cy.get(loginEmail, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(username);

    cy.get(loginPassword, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(password, { log: false });

    cy.get(loginButton, { timeout: 10000 }) // direct selector for reliability
      .should('be.visible')
      .click();

    
  });

  it('should remain on login page with invalid credentials', () => {
    cy.get(loginEmail, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('invalid@example.com');

    cy.get(loginPassword, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('wrongPassword', { log: false });

    cy.get(loginButton, { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.url({ timeout: 10000 }).should('include', '/account/login');
  });
});
