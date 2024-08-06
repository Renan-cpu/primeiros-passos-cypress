/// <reference types="Cypress" />

import userData from '../fixtures/users/user-Data.json'

describe('Orange HRM Tests', () => {

  const selectorlist = {
    userNameField: "input[name='username']",
    passwordField: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dasheboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
   
  }
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.userNameField).type(userData.userSuccess.userName)
    cy.get(selectorlist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.dasheboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.userNameField).type(userData.userFail.userName)
    cy.get(selectorlist.passwordField).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()

    cy.get(selectorlist.wrongCredentialAlert)
  })

})