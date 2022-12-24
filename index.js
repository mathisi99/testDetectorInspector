const jsdom = require('jsdom');
const puppeteer = require('puppeteer');
const {checkRecordTime, checkNumberWithItsUnit, checkDate, generateBarChart} = require(__dirname + '/src/checkRecordTime.js')


async function getDOM(url){
  //headless browser, library puppeteer let us access and take the DOM take care about CORS
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();


  //take the DOM of the URL
  const dom = new jsdom.JSDOM(html);
  const window = dom.window;
  

  //create the jquery on the window we get from url
  let $ = require('jquery')(window);


  //if one page have more than 1 table.
  //and this is get the type of data of each column in the table
  $('.wikitable tbody').get().forEach((tableElement, tableIndex) => {
    let numericCols = {};
    let values = {};
    let valueCol;
    let numCol = 0;
    

    $(tableElement).find('tr:nth-child(2) td').get().forEach((tdElement, tdIndex) => {
      let elementText = $(tdElement).find('style').remove().end().text().replace('\n', '').replace(/\[\d*\]/g,'');

      if (checkDate(elementText)) {
        numericCols[tdIndex] = 'date';
        numCol++;
      }else if (checkRecordTime(elementText)){
        numericCols[tdIndex] = 'time';
        numCol++;
      }else if (checkNumberWithItsUnit(elementText)){
        numericCols[tdIndex] = 'number';
        numCol++;
      }else{
        // do nothing
      }
    })


    // bar graph need two array of data to plot
    if (numCol < 2) {
      console.log(`Find ${numCol} column of numeric`);
      return;
    }

    for (const [key, value] of Object.entries(numericCols)){ 
      // index of colummn start from 0 but child index in DOM start from 1
      values[value] = $(tableElement).find(`tr td:nth-child(${Number(key)+1})`).map((index, element) => {
        return $(element).find('style').remove().end().text().replace('\n', '').replace(/\[\d*\]/g,'');
      }).get();
  
      console.log(value, values[value]);
      if (value === 'number'){
        valueCol = values['number'].map((str, index) => {
          return Number(str.match(/\d+\.?\d*/)[0]);
        })
      }else if(value === 'time'){
        valueCol = values['time'];
      }  
    }

    let xValues = values['date'];
    let yValues = valueCol;

    
    let options = {};
    let name = url.split("/").at(-1);
    generateBarChart(xValues, yValues, 'm', `./imgFile/${name}_chart_${tableIndex}.png`, options);
  }) // end of tableElement forEach loop
  
  await browser.close();
}

let url = 'https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression';

getDOM(url);

