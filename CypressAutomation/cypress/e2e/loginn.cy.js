///<reference types="cypress" />

describe('Login Test for PMS', () => {
  it('should log in with valid credentials', () => {
    // Visit the login page
    cy.visit('https://dev.ntouch.ai/account/login');

    // Enter Username or Email
    cy.get('input[name="username"], input[type="email"], input[placeholder*="Username"]')
      .click()
      .type('demo1@gmail.com', { delay: 100 });

    // Enter Password
    cy.get('input[name="password"], input[placeholder*="Password"], input[type="password"]')
      .click()
      .type('1q2w3E*', { delay: 100 });

    // Click Login button
    cy.get('button[type="submit"]').click();

    // Assert login successful (example)
    cy.url().should('not.include', '/account/login');
  });
});