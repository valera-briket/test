let mainPage = require('../po/mainPagePO.js');


const { setDefaultTimeout } = require('cucumber');      //setting default cucmber timeout since edfault is 5 sec(it's not enough)
setDefaultTimeout(60 * 1000);



Given('I open {string}', async function (string) {
    await mainPage.get(string);

});

When('I click on {string}', async function (string) {
    await mainPage.getElement(string).click();
    // await browser.pause(4444);
});

Then('{string} is shown', async function (string) {
    await expect(mainPage.isShown(string)).to.eventually.equal(true);
});

Then('{string} is not shown', async function (string) {

    await expect(mainPage.isPresent(string)).to.eventually.equal(false);

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






