// File: cypress/e2e/dashboard_sidebar_visit.cy.js

describe('nTouch Dev Dashboard - Visit All Pages via Sidebar', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';

  const login = () => {
    const username = Cypress.env('username') || 'demo1@gmail.com';
    const password = Cypress.env('password') || '1q2w3E*';

    cy.visit('https://dev.ntouch.ai/account/login');

    cy.get(loginEmail, { timeout: 10000 }).should('be.visible').clear().type(username);
    cy.get(loginPassword, { timeout: 10000 }).should('be.visible').clear().type(password, { log: false });
    cy.get(loginButton, { timeout: 10000 }).should('be.visible').click();

    cy.url({ timeout: 15000 }).should('include', '/dashboard');
  };

  before(() => {
    login();
  });

  it('should visit all pages from sidebar using CSS selectors', () => {
    const pages = [
      { url: '/dashboard', selector: '.lpx-nav-menu > :nth-child(1) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' },
      { url: '/booking', selector: '.lpx-nav-menu > :nth-child(1) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' },
      { url: '/room-units', selector: '.lpx-nav-menu > :nth-child(4) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' },
      { url: '/guests', selector: ':nth-child(6) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon' },
      { url: '/tasks', selector: ':nth-child(7) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' },
      { url: '/tenant-settings', selector: ':nth-child(11) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' },
      { url: '/marketplace', selector: ':nth-child(12) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' },
      { url: '/cash-management', selector: ':nth-child(8) > :nth-child(1) > :nth-child(1) > .lpx-menu-item-icon > .icon' },
      { url: '/reports', selector: '.lpx-nav-menu > :nth-child(9) > :nth-child(1) > :nth-child(1)' },
      { url: '/reports/finance', selector: ':nth-child(10) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' },
      { url: '/booking-discounts', selector: ':nth-child(10) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon' }
    ];

    pages.forEach((page) => {
      cy.get(page.selector, { timeout: 10000 }).click();
      cy.url().should('include', page.url);
      cy.wait(1000); // Optional wait to see page load
    });
  });
});
