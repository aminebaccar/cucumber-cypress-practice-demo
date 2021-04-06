# Cucumber + Cypress Sample Project
This is a demo project of integrating Cypress and Cucumber to create a testing framework on which you can write e2e tests with ease, a sample BDD scenario is written and its steps implemented, the test is to be ran on the [SwagLabs](http://saucedemo.com/) demo app.

## Step Definitions
Step definitions are divided into three files based on their gherkin keyword ```When, Then, Given``` inside the ```./integration/{feature_file_name}``` directory, if you want to reuse a step, you should move it under ```./integration/common```

## Test Data
In this project, test data isn't hardcoded into the feature files, instead it's provided inside ```.json``` files inside the fixtures directory ```./fixtures``` to facilitate data reuse and implement data-driven testing. 

## Locators
Web element locators are provided in xpath and grouped in the ```locators.js``` in the ```./fixtures``` directory, I used the [cypress-xpath](https://www.npmjs.com/package/cypress-xpath) package to locate web elements.
## Installation
Use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies from ```package.json```.

```bash
npm install
```

## Usage
You can run cypress by using
```bash
npm run cy:open
```
