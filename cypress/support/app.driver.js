export class AppDriver {

    static visitApp() {
      cy.visit('https://app.busybeapp.com');
      cy.log("Visited BusyBe website");
    }
  
    static verifyEntryDisplayed(testMessage) {
        cy.get(`flt-semantics[aria-label="${testMessage}"]`, { timeout: 10000 })
        .should('exist')
        .and('be.visible')
        .log(`Entry "${testMessage}" is displayed on the BusyBe website`);
    }    
  }
  