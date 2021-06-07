/// <reference types="cypress" />

// elements
const logoutButton = '.user > .btn'
const titleOfDashboardPage = 'Testers Hotel'
const viewRoomsButton = ':nth-child(1) > .btn'
const viewClientButton = '.blocks > :nth-child(2) > .btn'

// actions/functions

function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)    
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function viewRooms(cy, contentToConfirm){
    cy.get(viewRoomsButton).click()
    cy.contains(contentToConfirm)
}

function viewClient(cy, contentToConfirm){
    cy.get(viewClientButton).click()
    cy.contains(contentToConfirm)
}



//exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    viewRooms,
    viewClient

}