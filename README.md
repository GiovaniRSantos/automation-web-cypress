Dependencies:

- NODE:
https://nodejs.dev/download

- Allure-report:
https://github.com/Shelex/cypress-allure-plugin
https://docs.qameta.io/allure/

- Cypress:
https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

"scripts": {
    "cypress:open": "./node_modules/.bin/cypress open --browser chrome",
    "cy:run": "npm run allure:clear && npx cypress run --config video=false --env allure=true --browser chrome",
    "allure:clear": "rm -r -f allure-results && rm -r -f cypress/screenshots && rm -r -f allure-report",
    "report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
  }

Use to:
- cypress:open
  --Open Cypress
  
- cy:run
  --Run all specs headless mode with allure report
  
- allure 
  --Remove all folders created by the report
  
- report
  --report generate

  
  
