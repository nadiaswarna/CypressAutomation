// File: cypress/e2e/dashboard_regression.cy.js

describe('nTouch Dev Dashboard Regression Test', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';

  // Menu items list
  const pages = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      selector: '.lpx-nav-menu > :nth-child(1) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon'
    },
    {
      name: 'Reservation',
      url: '/booking',
      selector: '.lpx-nav-menu > :nth-child(1) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon'
    },
    {
      name: 'Room Units',
      url: '/room-units',
      selector: '.lpx-nav-menu > :nth-child(4) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon'
    },
    {
      name: 'Guests',
      url: '/guests',
      selector: ':nth-child(6) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon'
    },
    {
      name: 'Tasks',
      url: '/tasks',
      selector: ':nth-child(7) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon'
    },
    {
      name: 'Tenant Settings',
      url: '/tenant-settings',
      selector: ':nth-child(11) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon'
    },
    {
      name: 'Marketplace',
      url: '/marketplace',
      selector: ':nth-child(12) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon'
    }
  ];

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

  pages.forEach((page) => {
    it(`Should navigate to ${page.name} page and verify`, () => {
      cy.get(page.selector, { timeout: 10000 }).should('be.visible').click({ force: true });
      cy.url({ timeout: 10000 }).should('include', page.url);
      cy.get('body', { timeout: 10000 }).should('be.visible'); // Basic page load check
    });
  });

  it('Should logout successfully', () => {
    cy.get('header').contains('Logout').click({ force: true });
    cy.url({ timeout: 10000 }).should('include', '/account/login');
  });
});
