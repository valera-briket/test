let mainPage = require('../po/mainPagePO.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);



Given('I open {string}', async function (string) {
    await mainPage.get(string);

});

Given('main page is shown', async function () {
    await expect(browser.getTitle()).to.eventually.equal('Crowdfund Innovations & Support Entrepreneurs | Indiegogo')
    await expect(mainPage.isShown('mainPage')).to.eventually.equal(true);
});

When('I click on {string}', async function (string) {
    await mainPage.getElement(string).click();
    // await browser.pause(4444);
});

Then('search panel is shown', async function () {
    await expect(mainPage.isShown('search bar')).to.eventually.equal(true);
});

Then('search panel is not shown', async function () {

    await expect(mainPage.isPresent('search bar')).to.eventually.equal(false);

});

Then('header is not shown', async function () {
    await expect(mainPage.isPresent('header')).to.eventually.equal(false);
});

Then('header is shown', async function () {
    await expect(mainPage.isShown('header')).to.eventually.equal(true);

});

Then('placeholder in the search is {string}', async function (string) {
    await expect(mainPage.getPlaceholder('placeholder')).to.eventually.equal('Search');
});

When('I type {string} in a search bar', async function (string) {
    await mainPage.typeString("search bar", string);
});

Then('{string} is displayed in a search bar', async function (string) {
    await expect(mainPage.checkSearchString("search bar")).to.eventually.equal(string);
});






