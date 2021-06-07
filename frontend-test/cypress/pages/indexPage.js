/// <reference types="cypress" />

// elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'
const errorUnvalidLogin = 'Bad username or password'

// actions/functions

function checkTitleOfIndexPage(){
    cy.title().should('eq', titleOfIndexPage)    
}

function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

function performUnvalidLogin(cy, username, password){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(errorUnvalidLogin)
}

//exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin,
    performUnvalidLogin
}