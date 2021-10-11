Dependencies:

- NODE:
https://nodejs.dev/download

- Allure-report:
https://github.com/Shelex/cypress-allure-plugin
https://docs.qameta.io/allure/

- Cypress:
https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements


Config Amb:
Open project and run script in terminal: 
    -- npm install

"scripts": {
    "cypress:open": "./node_modules/.bin/cypress open --browser chrome",
    "cy:run": "npm run allure:clear && npx cypress run --config video=false --env allure=true --browser chrome",
    "allure:clear": "rm -r -f allure-results && rm -r -f cypress/screenshots && rm -r -f allure-report",
    "report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
  }

Instructions for scripts:

Use to:
- cypress:open
  -- For Open Cypress
  
- cy:run
  -- For run all specs headless mode with allure report
  
- allure 
  -- For remove all folders created by the report
  
- report
  -- For report generate

  
  
