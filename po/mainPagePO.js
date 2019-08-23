
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


function getElement(elem) {
  if (byId[elem]) {
    return element(by.id(byId[elem]))
  }
  else if (byClassName[elem]) {
    return element(by.className(byClassName[elem]))
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

} 