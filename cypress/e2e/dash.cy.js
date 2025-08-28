describe('nTouch Dev Dashboard - Visit All Pages', () => {
  const loginEmail = '#loginEmail';
  const loginPassword = '#loginPassword';
  const loginButton = 'button[type="submit"]';


  // সরাসরি URL দিয়ে চেক করা পেজগুলোর লিস্ট
  const pages = [
    '/dashboard',
    '/booking',
    '/room-units',
    '/house-keepings', // ✅ নতুন যোগ করা পেজ
    '/guests',
    '/tasks',
    '/tenant-settings',
    '/marketplace'
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


  // 1️⃣ সরাসরি URL দিয়ে ভিজিট করা পেজ টেস্ট
  pages.forEach((page) => {
    it(`Should visit ${page} page`, () => {
      cy.visit(`https://dev.ntouch.ai${page}`);
      cy.url().should('include', page);
    });
  });


  // 2️⃣ মেনু থেকে ক্লিক করে ভিজিট করা পেজ টেস্ট
  it('Should visit Cash Management page via menu', () => {
    cy.get(':nth-child(8) > :nth-child(1) > :nth-child(1) > .lpx-menu-item-icon > .icon').click();
    cy.url().should('include', '/cash-management');
  });


  it('Should visit Reports page via menu', () => {
    cy.get('.lpx-nav-menu > :nth-child(9) > :nth-child(1) > :nth-child(1)').click();
    cy.url().should('include', '/reports');
  });


  it('Should visit Finance Report page via menu', () => {
    cy.get(':nth-child(10) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon').click();
    cy.url().should('include', '/reports/finance');
  });


  it('Should visit Booking Discounts page via menu', () => {
    cy.get(':nth-child(10) > lpx-sub-navbar > .lpx-menu-item-link > .lpx-menu-item-icon > .icon').click();
    cy.url().should('include', '/booking-discounts');
  });


});
