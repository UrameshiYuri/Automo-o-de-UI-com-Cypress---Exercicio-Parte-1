const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'yuri',
    endpoint: "https://demo.reportportal.io/api/v1",
    apiKey: "s0VCDcnYQ3K6k-ZbnrKqmBzdN7R8OkqJhWTPhwEiPX6Z_aO1B5fz8J7Sa7o2KcrJ",
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