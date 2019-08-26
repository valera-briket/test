




let byId = {
};

let byClassName = {
  'search icon': 'layoutHeader-generalHeader-searchButton',
  'search panel': 'columns is-mobile layoutHeader-searchBar align-middle cancel-negative-margin',
  'search bar': 'layoutHeader-searchBar-input',
   placeholder: 'layoutHeader-searchBar-input',
   
};

let byXpath = {
  'main page' : '/html/body',
  'dismiss button': "//a[@aria-label = 'Search button']",
  header: '//*[@id="vueHomepage"]/div[1]/div/nav/div',
  'result search panel': '//section[@class="exploreResults"]/div[1]/form/input',
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
    // I had a problem checking that header is not shown(because element locator deleted when we hide header), so I just check that it's deleted from DOM model
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