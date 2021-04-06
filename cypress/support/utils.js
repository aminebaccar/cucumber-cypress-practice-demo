export function getParameterizedLocator (locator, param) {
    return locator.replace("?", param);
}
export function getFixtureFile (fileName) {
    return Cypress.env('fixturesBaseDir').concat(fileName);
}