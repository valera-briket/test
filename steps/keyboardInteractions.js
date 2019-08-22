When('I press {string}', async function (string) {
    //switch construction to process keyboard pressings
    switch (string) {
        case 'Enter':
            await browser.actions().sendKeys(protractor.Key.ENTER).perform();
            break;
        case 'Down':
    }
});