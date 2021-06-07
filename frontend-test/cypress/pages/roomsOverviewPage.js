/// <reference types="cypress" />

// elements
const logoutButton = '.user > .btn'
const titleOfRoomsOverviewPage = 'Testers Hotel'
const backButton = ':nth-child(3) > .btn'
const createRoomButton = 'h2 > .btn'
const lastRoomFloorNr = ':last-child > :nth-child(2) > h3'
const lastRoomNrIcon = ':last-child > .icon'
const lastRoomCategory = ':last-child > :nth-child(2) > .category'
const lastRoomAvailable = ':last-child > :nth-child(2) > .available'
const lastRoomPrice = ':last-child > :nth-child(2) > .price'
const lastRoomFeature = ':last-child > :nth-child(2) > .features > .feature'

// actions/functions

function checkTitleOfRoomsOveriviewPage(cy){
    cy.title().should('eq', titleOfRoomsOverviewPage)    
}

function backToDashboard(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

function createNewRoom(cy, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
}

function validateLastRoom(cy, roomNumberToConfirm,  categoryToConfirm, availableToConfirm, priceToConfirm, featureToConfirm){
    cy.get(lastRoomNrIcon).should('contain', roomNumberToConfirm)
    cy.get(lastRoomCategory).should('contain', categoryToConfirm)
    cy.get(lastRoomAvailable).should('contain', availableToConfirm)
    cy.get(lastRoomPrice).should('contain', priceToConfirm)
    cy.get(':last-child > :nth-child(2) > .features > .feature').should('contain', featureToConfirm)
}

//exports
module.exports = {
    checkTitleOfRoomsOveriviewPage,
    backToDashboard,
    createNewRoom,
    validateLastRoom
}