const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.busybeapp.com",
    env: {
      SLACK_TOKEN: process.env.SLACK_TOKEN || "", // Fallback to an empty string if not defined
    },
  },
});
