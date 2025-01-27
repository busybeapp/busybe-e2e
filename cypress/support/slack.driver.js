
const slackApiUrl = "https://clear-slate-8b4de92f5776.herokuapp.com/api/slack/message-shortcut/"

export const addSlackEntry = (slackToken, message) => {
  return cy.request({
    method: "POST",
    url: slackApiUrl,
    form: true,
    body: {
      payload: JSON.stringify({
        token: slackToken,
        message: { text: message },
      }),
    },
  });
};
