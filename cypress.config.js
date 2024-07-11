const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    pageLoadTimeout: 30000,
  },
});
