// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",   // ✅ এখানে যোগ করুন
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "e2e/**/*.cy.{js,jsx,ts,tsx}",   // ✅ শুধু "e2e" দিন
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
