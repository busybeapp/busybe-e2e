export class AppDriver {

    static visitApp() {
      cy.visit('https://app.busybeapp.com');
      cy.log("Visited BusyBe website");
    }
  
    static verifyEntryDisplayed(testMessage) {
      cy.contains(testMessage, { timeout: 10000 })
        .should("be.visible")
        .log("Entry is displayed on the BusyBe website");
    }
  }
  