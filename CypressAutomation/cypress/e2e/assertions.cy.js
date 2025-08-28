// File: cypress/e2e/login_page_assertion.cy.js

describe('nTouch Dev Login Page Assertions', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';
  const loginUrl = 'https://dev.ntouch.ai/account/login?returnUrl=%2Fdashboard';

  beforeEach(() => {
    cy.visit(loginUrl);
  });

  it('should load the login page URL correctly', () => {
    cy.url().should('eq', loginUrl);               // Exact match
    cy.url().should('include', '/account/login');  // Partial match
  });

  it('should display all login form elements', () => {
    cy.get(loginEmail).should('be.visible').and('have.attr', 'placeholder', 'Email');
    cy.get(loginPassword).should('be.visible').and('have.attr', 'placeholder', 'Password');
    cy.get(loginButton).should('be.visible').and('contain.text', 'Login');
  });

  it('should not allow empty login', () => {
    cy.get(loginButton).click();
    cy.get('.alert').should('be.visible').and('contain.text', 'Please enter your email and password');
  });

  it('should accept valid credentials and redirect to dashboard', () => {
    const username = Cypress.env('username') || 'demo1@gmail.com';
    const password = Cypress.env('password') || '1q2w3E*';

    cy.get(loginEmail).type(username);
    cy.get(loginPassword).type(password, { log: false });
    cy.get(loginButton).click();

    cy.url({ timeout: 15000 }).should('include', '/dashboard'); // Redirect check
  });
});
