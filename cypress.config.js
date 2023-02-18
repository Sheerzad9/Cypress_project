const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*",
    supportFile: "cypress/support/index.ts",
    //Set video to true if you want videos to be recorded and saved
    video: false,
  },
});
