/// <reference types="cypress" />

// elements
const logoutButton = '.user > .btn'
const titleOfViewClientOverview = 'Clients'
const backButton = ':nth-child(3) > .btn'


// actions/functions

function checkClientPage(cy){
    cy.contains(titleOfViewClientOverview)    
}

function backToDashboard(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}



//exports
module.exports = {
    checkClientPage,
    backToDashboard
}