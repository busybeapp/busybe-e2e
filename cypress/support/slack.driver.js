export const addSlackEntry = (slackUrl, slackToken, message) => {
  return cy.request({
    method: "POST",
    url: slackUrl,
    form: true,
    body: {
      payload: JSON.stringify({
        token: slackToken,
        message: { text: message },
      }),
    },
  });
};
