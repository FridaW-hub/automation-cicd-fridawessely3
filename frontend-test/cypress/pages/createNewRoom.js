/// <reference types="cypress" />

// elements
const logoutButton = '.user > .btn'
const createButton = '.blue'
const roomNumberTextField = ':nth-child(2) > input'
const floorNumberTextField = ':nth-child(3) > input'
const roomCategorySelection = ':nth-child(1) > select'
const availableCheckBox = '.checkbox'
const priceTextField = ':nth-child(5) > input'
const featureSelection = ':nth-child(6) > select'


// actions/functions
function createNewRoom(cy, roomType, roomNumber, floorNumber, roomPrice, roomFeature){
    cy.get(roomCategorySelection).select(roomType)
    cy.get(roomNumberTextField).type(roomNumber)
    cy.get(floorNumberTextField).type(floorNumber)
    cy.get(availableCheckBox).click()
    cy.get(priceTextField).type(roomPrice)
    cy.get(featureSelection).select(roomFeature)
    cy.get(createButton).click()
}


//exports
module.exports = {
    createNewRoom
}