import { addSlackEntry } from "../support/slack.driver.js";

describe('Add slack entry and verify on BusyBe website', () => {
  it('should add entry via slack and verify on BusyBe website', () => {
    const slackApiUrl = "https://clear-slate-8b4de92f5776.herokuapp.com/api/slack/message-shortcut/"
    const slackToken = Cypress.env('SLACK_TOKEN');
    const testMessage = `E2E Rocks! ${new Date().toISOString()}`

    if (!slackToken) {
      throw new Error("SLACK_TOKEN is not defined. Please set it before running the test.");
    }


    addSlackEntry(slackApiUrl, slackToken, testMessage).then((response) => {
      expect(response.status).to.eq(200);
      cy.log("Entry successfully added via Slack API");
    });

    cy.visit('https://app.busybeapp.com')

    // Wait for the entry to appear on the page
    cy.contains(testMessage, { timeout: 10000 })
      .should("be.visible")
      .log("Entry is displayed on the BusyBe website");
    });
  })
