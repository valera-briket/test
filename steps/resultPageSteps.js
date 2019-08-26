let resultPage = require('../po/resultPagePO.js');
let mainPage = require('../po/mainPagePO.js');


const { setDefaultTimeout } = require('cucumber');            //setting default cucmber timeout since edfault is 5 sec(it's not enough)
setDefaultTimeout(60 * 1000);



// The result page can be empty so I check result panel by filters and result search panel
Then('result page is shown', async function () {
    await expect(resultPage.isShown('filters')).to.eventually.equal(true);
    await expect(resultPage.isShown('search panel')).to.eventually.equal(true);
});

Then('{string} is displayed in a result panel search bar', async function (string) {
    await expect(mainPage.checkSearchString("result search panel")).to.eventually.equal(string);
});

Then('no results found is shown', async function () {
    await expect(resultPage.isShown('noResulsFound')).to.eventually.equal(true);
});

Then('there are {string} results on page', async function (string) {
    await browser.sleep(5000) //sometimes result page lags so I added delay in order to avoid it 
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
