/// <reference types="cypress" />

describe('Alerts', () => {

    //1) Javascript Alert: It will have some text and an ‘OK’ button
    it('Js alert', ()=>{
        
       cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
       cy.get("button[onclick='jsAlert()']").click();

       cy.on('window:alert',(t)=>{
    expect(t).to.contains('I am a JS Alert');

    
})
cy.get('#result').should('have.text','You successfully clicked an alert')
       //cy.get('#content > div > ul > li:nth-child(1) > button')

    })

    //2) Javascript Confirm Alert: It will have some text with ‘OK’ and ‘Cancel’ buttons
// Javascript confirm alert, it will have some text with ok and cancel buttons
it('Js confirm alert - OK',()=>{

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm');
    })

    //cypress automatically closed alert window by using ok button-default

    cy.get('#result').should('have.text','You clicked: Ok')
     })
    

     it('Js confirm alert - Cancel',()=>{

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm');
    })

    //cypress automatically closed alert window by using ok button-default
    cy.on('window:confirm',()=>false) //cancel button

    cy.get('#result').should('have.text','You clicked: Cancel')
     })
    


    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with ‘OK’

    it.only('Js prompt alert - OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

       // cy.get("button[onclick='jsPrompt()']").click();
      cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('welcome');
        });
        
        cy.get("button[onclick='jsPrompt()']").click();

//cypress will automatically close prompted alert- it will use OK button – by default

cy.on('window:confirm', ()=> false);

cy.get("#result").should('have.text','You entered: welcome');
    })

    //4) Authenticated Alert
})
