const slackApiUrl =
  "https://cloud.busybeapp.com/api/slack/message-shortcut";

function getSlackToken() {
  const slackToken = Cypress.env("SLACK_TOKEN");

  if (!slackToken) {
    throw new Error(
      "SLACK_TOKEN is not defined. Please set it before running the test.",
    );
  }

  return slackToken;
}

export const addSlackEntry = (message) => {
  return cy
    .request({
      method: "POST",
      url: slackApiUrl,
      form: true,
      body: {
        payload: JSON.stringify({
          token: getSlackToken(),
          message: { text: message },
        }),
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      cy.log("Entry successfully added via Slack API");
    });
};
