let resultPage = require('../po/resultPagePO.js');
let mainPage = require('../po/mainPagePO.js');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);




Then('result page is shown', async function () {
    await expect(resultPage.isShown('filters')).to.eventually.equal(true);
    await expect(resultPage.isShown('search panel')).to.eventually.equal(true);
});

Then('{string} is displayed in a result panel search bar', async function (string) {
    await expect(mainPage.checkSearchString("search panel")).to.eventually.equal(string);
});

Then('no results found is shown', async function () {
    await expect(resultPage.isShown('noResulsFound')).to.eventually.equal(true);
});

Then('there are {string} results on page', async function (string) {
    let result = await resultPage.countResults(); //creating variable to resolve promise
    await expect(result).to.equal(+string);
});

Then('I click {string} button', async function (string) {

    await resultPage.getElement(string).click();
});

When('I change sorting to {string}', async function (string) {
    await resultPage.getElement('dropDown').click()
    await resultPage.getSortingOptions(string);
});

Then('result is displayed according to sorting', function () {
    // There are no UI changes so that this step do nothing
    return;
});

When('I change project timing to {string}', async function (string) {
    await resultPage.getTimingOptions(string); //function that selects radio button based on string 
});

Then('result is displayed according to project timing', async function () {
    await expect(resultPage.isShown('filterTag')).to.eventually.equal(true);
});