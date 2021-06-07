/// <reference types ="cypress" />

import * as indexFuncs from '../../pages/indexPage'
import * as dashBoardFuncs from '../../pages/dashboardPage'
import * as targets from '../../targets/targets'
import * as roomsOverviewFuncs from '../../pages/roomsOverviewPage'
import * as createRoomFuncs from '../../pages/createNewRoom'
import * as clientOverviewFuncs from '../../pages/clientOverviewPage'

//test suite
describe('Test suite', function(){

    //before each
    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })
    
    //Test case Login and logout
    it('Perform login and logout', function(){
        cy.percySnapshot('login-page')       
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        cy.percySnapshot('dashboard-page')
        dashBoardFuncs.performLogout(cy, 'Login')
        cy.percySnapshot('logged-out')
        
    })

    //Test case unvalid Login
    it('Perform unvalid login', function(){
        indexFuncs.performUnvalidLogin(cy, targets.username, targets.unvalidPassword)
        cy.percySnapshot('unvalid-login')        
    })

    //Test case view Rooms
    it('View Rooms', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        cy.percySnapshot('rooms-overview-page')
        roomsOverviewFuncs.backToDashboard(cy, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')      
    })    

    //Test case Create Room
     it('Create Room', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        roomsOverviewFuncs.createNewRoom(cy, 'New Room')
        createRoomFuncs.createNewRoom(cy, 'Double', '701', '7', '400', 'sea_view')
        roomsOverviewFuncs.validateLastRoom(cy,'701', 'Category: double', 'Available: true', 'Price: 400kr', 'sea view')
        roomsOverviewFuncs.backToDashboard(cy, 'Tester Hotel Overview')
         dashBoardFuncs.performLogout(cy, 'Login')      
        }) 

    //Test case view Client
    it('View Client', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewClient(cy, 'Clients')
        clientOverviewFuncs.backToDashboard(cy, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')      
        })      
})