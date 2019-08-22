
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;



let byId = {

};

let byClassName = {
  'filters': 'exploreFilters',
  'search results panel': 'exploreDetail-campaigns row',
  dropDown: 'exploreDropdown-select ng-scope',
  filterTag: 'exploreQueryConfig-selectedFilters'
};

let byXpath = {
  'search panel': '//section[@class="exploreResults"]/div[1]/form/input',
  noResulsFound: '//div[@class="exploreDetail-noResults"]',
  'show more': '//div[@class="exploreMore"]/div[1]/div/a',
  results: '//div[@class="exploreDetail-campaigns row"]/discoverable-card',
  dropDownOpen: '//div[@class="dropdown exploreDropdown open"]/ul/descendant::a',
  projectTiming: '//div[@class="exploreFilter"]//input',
  projectTimingTexts: '//div[@class="exploreFilter"]//div[@class="styledRadio-label ng-binding"]',
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

function getElements(elem) {
  if (byId[elem]) {
    return element.all(by.id(byId[elem]))
  }
  else if (byClassName[elem]) {
    return element.all(by.className(byClassName[elem]))
  }
  else if (byCss[elem]) {
    return element.all(by.css(byCss[elem]))
  }
  else if (byXpath[elem]) {
    return element.all(by.xpath(byXpath[elem]))
  }
}

module.exports = {
  getElement,
  get: (string) => {
    return browser.get(string);
  },
  openFeature: (string) => {
    return getElement(string).click();
  },
  isShown: (string) => {
    return getElement(string).isDisplayed();
  },
  isPresent: (string) => {
    return getElement(string).isPresent();
  },
  typeString: (locator, string) => {
    return getElement(locator).sendKeys(string)
  },
  countResults: () => {
    return getElements('results').count()
  },
  getSortingOptions: async (string) => {
    let elements = await getElements('dropDownOpen');
    //Here we are searching for element recieved from keyword by matching sorting option texts and keyword. When it found, we click on it
      for (item of elements) {
        let name = await item.getText();
        if (name == string) await item.click();
      }
   },
 
 
   getTimingOptions: async (string) => {
     let elements = await getElements('projectTiming'); //getting all radio buttons selectors
     let texts = await getElements('projectTimingTexts'); //getting all radio button texts
     let counter = 0;
     //Here we are searching for element recieved from keyword by matching radio
     //button texts and keyword. If it matches, we click on radio button with appropriate number(using elemens array)
     for (item of texts) {
      let name = await item.getText();
      if(name == string) {
        await elements[counter].click();
        break;
      }
      else counter++;
    }
    }
}

