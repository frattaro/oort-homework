const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  env: {
    codeCoverage: {
      url: "/api/__coverage__"
    }
  },
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: true,
  video: false,
  viewportHeight: 720,
  viewportWidth: 1480,
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.spec.js"
  }
});
