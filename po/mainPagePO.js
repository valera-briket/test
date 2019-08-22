
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;



let byId = {
  
};

let byClassName = {
  'search icon': 'layoutHeader-generalHeader-searchButton',
  'search bar': 'columns is-mobile layoutHeader-searchBar align-middle cancel-negative-margin',
  'search bar': 'layoutHeader-searchBar-input',
  placeholder: 'layoutHeader-searchBar-input'
};

let byXpath = {
  mainPage: '/html/body',
  'dismiss button': "//a[@aria-label = 'Search button']",
  header: '//*[@id="vueHomepage"]/div[1]/div/nav/div',
  'search panel': '//section[@class="exploreResults"]/div[1]/form/input',
};

let byCss = {
 }

function getElement(elem) {
  if (byId[elem]) {
    return element(by.id(byId[elem]))
  }
  else if (byClassName[elem]) {
    return element(by.className(byClassName[elem]))
  }
  else if (byCss[elem]) {
    return element(by.css(byCss[elem]))
  }
  else if (byXpath[elem]) {
    return element(by.xpath(byXpath[elem]))
  }
}

module.exports = {
  getElement,
  get: (url) => {
    return browser.get(url);
  },
  openFeature: (locator) => {
    return getElement(locator).click();
  },
  isShown: (locator) => {
    return getElement(locator).isDisplayed();
  },
  isPresent: (locator) => {
    return getElement(locator).isPresent();
  },
  typeString: (locator, string) => {
    return getElement(locator).sendKeys(string)
  },
  checkSearchString: (locator, string) => {
    // here we are getting text, entered in the field
    return getElement(locator).getAttribute('value') 
  },
  getPlaceholder: (locator) => {
    // here we are getting placeholders from the fields 
    return getElement(locator).getAttribute('placeholder')
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*switchToFrame: async (string) => {
    await browser.switchTo().defaultContent();
    await browser.switchTo().frame(getElement(string).getWebElement());
  },
  moveElement: async (string, a, b, ) => {
    await browser.actions().mouseMove(element(by.id(string))).perform();
    await browser.actions().mouseDown().perform();
    await browser.actions().mouseMove({ x: a, y: b }).perform();
    await browser.actions().mouseUp().perform();

  },
  resizeElement: async (a, b) => {
    await browser.actions().mouseMove({ x: 150, y: 150 }).perform();
    await browser.actions().mouseDown().perform();
    await browser.actions().mouseMove({ x: a, y: b }).perform();
  },
  defaultDragCheckPos: (string, expectedXpos, expectedYpos) => {
    let positionX = 0;
    let positionY = 0;
    let positionResult = getElement(string).getLocation().then(function (location) {
      positionX = location.x;
      positionY = location.y;
      return expect(positionX).equal(expectedXpos) && expect(positionY).equal(expectedYpos);

    });
    return positionResult
  },

  constrainDragCheckPos: async (string, string2, expectedXpos, expectedYpos, expectedXpos2, expectedYpos2) => {
    let positionX = 0;
    let positionY = 0;
    let positionX2 = 0;
    let positionY2 = 0;
    const positionResult = await getElement(string).getLocation().then(function (location) {
      positionX = location.x;
      positionY = location.y;
      return expect(positionX).equal(expectedXpos) && expect(positionY).equal(expectedYpos);
    });
    const positionResult2 = await getElement(string2).getLocation().then(function (location) {
      positionX2 = location.x;
      positionY2 = location.y;
      return expect(positionX2).equal(expectedXpos2) && expect(positionY2).equal(expectedYpos2);
    });
    return positionResult && positionResult2
  },

  dropCheckColor: async (string, color) => {
    await getElement(string).getCssValue("color").then((color) => {
      expect(color).to.equal(color);
    })
  },

  dropCheckClass: async (string) => {
    await getElement(string).getAttribute('class').then(function (classes) {
      expect(classes).to.match(/ui-state-highlight/);
    });
  },*/
   
} 