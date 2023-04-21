const XLSX = require("xlsx");
const fs = require("fs");
const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
    watchForFileChanges: false,
  // video : false,
  // retries: {
  //   runMode: 0,
  //   openMode: 0,
  //   },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: "**/*.feature",
    //cucumber spec configuration
    // setupNodeEvents,

    setupNodeEvents(on, config) {
      // on('file:preprocessor', cucumber());
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      //==========================read exccel task===================================
      on('task', {
        // deconstruct the individual properties
        readExcel({fileName, generatedFileName})
        {
          try {
            const workBook = XLSX.readFile("./cypress/fixtures/"+fileName+".xlsx");
            const sheetName = workBook.SheetNames[0];
            const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
            fs.writeFileSync(
              "./cypress/fixtures/"+generatedFileName+".json",
              JSON.stringify(jsonData, null, 4),
              "utf-8"
            );
          } catch (e) {
            throw Error(e);
          }
          return null;
        }
      })
//===============================Cucumber event==================================
    preprocessor.addCucumberPreprocessorPlugin(on, config);
    on(
      "file:preprocessor",
      webpack({
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
      },
  },

});
//================================================================================================
// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     webpack({
//       webpackOptions: {
//         resolve: {
//           extensions: [".ts", ".js"],
//         },
//         module: {
//           rules: [
//             {
//               test: /\.feature$/,
//               use: [
//                 {
//                   loader: "@badeball/cypress-cucumber-preprocessor/webpack",
//                   options: config,
//                 },
//               ],
//             },
//           ],
//         },
//       },
//     })
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }