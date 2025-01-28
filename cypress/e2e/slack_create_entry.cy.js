import { addSlackEntry } from "../support/slack.driver.js";
import { AppDriver } from "../support/app.driver.js";

describe('Add slack entry and verify on BusyBe website', () => {
  it('should add entry via slack and verify on BusyBe website', () => {
    
    const testMessage = `E2E Rocks! ${new Date().toISOString()}`

    addSlackEntry(testMessage)

    AppDriver.visitApp()
    
    AppDriver.verifyEntryDisplayed(testMessage)

    });
  })
