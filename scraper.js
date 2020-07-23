const puppeteer = require('puppeteer');


async function scrapeProduct(url){

// open url (any website you want)
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

//  set selector (xPath) and getting values
    const [el] = await page.$x('//*[@id="priceblock_ourprice"]'); //go to url and copy the xPath of the element you selected
    const src = await el.getProperty('textContent');  // take the content of the selected element
    const srcTxt= await src.jsonValue();

    await page.screenshot({ path: 'screenshots/puppeteer.png' }); // it means: go to url and take ss and save this path

    console.log('Product price: '+srcTxt); // showing product price

    browser.close(); // close browser
    
};

scrapeProduct('https://amzn.to/3hxUf98'); // go to this url and running function







// by musabyigit