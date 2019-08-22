let mainPage = require('../po/mainPagePO.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;





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
  













//     When('user drags vertical box', async function () {
//         await features.switchToFrame('draggableFrame');
//     await features.moveElement('draggable', 0 , 120);

//     });

//     When('user grags horizontal box', async function () {
//         await features.switchToFrame('draggableFrame');
//         await features.moveElement('draggable2', 200, 0);
//             });


// When('user drop box to another box', async function () {
//     await features.switchToFrame('draggableFrame');
//     await features.moveElement('draggable', 140, 0);
//     });

// When('user resize box', async function () {
//     await features.switchToFrame('draggableFrame');
//     await features.resizeElement(140, 180);
//     });

// Then('box is dragged', async function () {
//     await features.defaultDragCheckPos('dragSquare', 128, 128);
// });

// Then('boxes are dragged', async function () {
//     await features.constrainDragCheckPos('dragSquare', 'dragSquare2', 8, 179.4375, 326, 59.4375);
// });

// Then('box is dropped', async function () {
//     await features.defaultDragCheckPos('dragSquare', 148, 18);
//     await features.dropCheckColor('dropSquare', "rgba(119, 118, 32, 1)");
//     await features.dropCheckClass('dropSquare');
// });

// Then('box is resized', async function () {
//     await features.defaultDragCheckPos('resizeSquare', 8, 8);
//     await browser.sleep(10000)
// });




