// File: cypress/e2e/dashboard.cy.js

describe('nTouch Dev Dashboard Test', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';
  const menuIcon = 'i.icon.menu-bars'; // Sidebar toggle
  const usersMenu = 'a[href="/users"]'; // Users menu link
  const totalRevenueSelector = 'div.col-6.top-bar-left-panel .total-revenue';
  const logoutButton = 'span.lpx-side-submenu-text:contains("Log out")';

  // Reusable login function
  const login = () => {
    const username = Cypress.env('username') || 'demo1@gmail.com';
    const password = Cypress.env('password') || '1q2w3E*';

    cy.visit('https://dev.ntouch.ai/dashboard');

    cy.get(loginEmail, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(username);

    cy.get(loginPassword, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(password, { log: false });

    cy.get(loginButton, { timeout: 10000 })
      .should('be.visible')
      .click();

    // Wait for dashboard load
    cy.get(menuIcon, { timeout: 15000 }).should('be.visible');
  };

  beforeEach(() => {
    login();
  });

  it('should display total revenue info on dashboard', () => {
    // Verify total revenue element
    cy.get(totalRevenueSelector, { timeout: 10000 })
      .should('be.visible')
      .then(($el) => {
        const revenueText = $el.text().trim();
        cy.log(`Total Revenue: ${revenueText}`);
        expect(revenueText).to.not.be.empty;
      });
  });

  it('should navigate to Users section', () => {
    // Open sidebar if collapsed
    cy.get(menuIcon).click();

    // Click Users menu
   // cy.get(usersMenu, { timeout: 10000 })
    //  .should('be.visible')
    //  .click({ force: true });

    // Verify navigation
    cy.url({ timeout: 10000 }).should('include', '/users');
  });

  it('should logout successfully', () => {
    cy.get(menuIcon).click();

    cy.contains('span.lpx-side-submenu-text', 'Log out', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.url({ timeout: 10000 }).should('include', '/account/login');
  });
});
