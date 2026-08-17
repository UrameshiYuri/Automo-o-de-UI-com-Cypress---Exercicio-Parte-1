const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'sKIvF1mZRZiXKlFHn7vhh0GCAfSkBH2C39Dq5jS7ZFs0FYysQkAA7aEJXGF7I8rr',
    endpoint: "https://demo.reportportal.io/api/v1",
    apiKey: " process.env.RP_API_KEY",
    project: "urameshiyuri_personal",
    launch: "Launch name",
    description: "Metricas de qualidade",
    attributes: [
      {
        key: "attributeKey",

        value: "attrbiuteValue",
      },
      {
        value: "anotherAttrbiuteValue",

      },
    ],
    mode: 'DEFAULT',
  },
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    projectId: "c1afny",
    video:true,
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});