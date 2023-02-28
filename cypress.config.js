const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 600,
  viewportWidth: 1000,
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
