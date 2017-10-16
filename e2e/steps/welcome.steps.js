const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

var {defineSupportCode} = require('cucumber');

defineSupportCode(({ Given, When, Then, setDefaultTimeout }) => {
    setDefaultTimeout(60 * 1000);

    Given('I go to the website', function (callback) {
        browser.get('http://localhost:4200/').then(callback);
    });

    Then(/^I expect the title of the page "([^"]*)"$/, function (name, callback) {
        expect(browser.getTitle()).eventually.to.equals(name).and.notify(callback);
    });
});

