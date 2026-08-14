const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'ChZbNDsTQ5ur-ZmjCHTMKLQ3ECauSW7BydHgooOVu_xCMoLCr_t-Fb4v9HWbgZFa',
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
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});