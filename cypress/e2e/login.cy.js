/// <reference types="Cypress" />

describe('Orange HRM Tests', () => {

  const selectorlist = {
    userNameField: "input[name='username']",
    passwordField: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.userNameField).type('Admin')
    cy.get(selectorlist.passwordField).type('admin123')
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.userNameField).type('Admin')
    cy.get(selectorlist.passwordField).type('admin12')
    cy.get(selectorlist.loginButton).click()

    cy.get(selectorlist.wrongCredentialAlert)
  })

})