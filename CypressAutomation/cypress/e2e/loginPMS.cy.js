// File: cypress/e2e/loginPMS.cy.js
/// <reference types="cypress" />

describe('PMS Login Tests (Simple)', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';

  beforeEach(() => {
    cy.visit('https://dev.ntouch.ai/account/login');
  });

  it('shows the login form', () => {
    cy.get(loginEmail).should('be.visible');
    cy.get(loginPassword).should('be.visible');
    cy.get(loginButton).should('be.visible');
  });

  it('logs in with valid credentials', () => {
    const username = Cypress.env('username') || 'demo1@gmail.com';
    const password = Cypress.env('password') || '1q2w3E*';

    cy.get(loginEmail).clear().type(username);
    cy.get(loginPassword).clear().type(password, { log: false });
    cy.get(loginButton).click();

    cy.url({ timeout: 20000 }).should('include', '/dashboard');
  });

  it('fails with invalid credentials', () => {
    cy.get(loginEmail).clear().type('invalid@example.com');
    cy.get(loginPassword).clear().type('wrongPassword', { log: false });
    cy.get(loginButton).click();

    cy.url({ timeout: 10000 }).should('include', '/account/login');
  });
});
