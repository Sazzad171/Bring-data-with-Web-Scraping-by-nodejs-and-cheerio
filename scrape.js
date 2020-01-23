const request = require('request');
const cheerio = require('cheerio');

var output;

request('https://www.pickaboo.com/search/result/?q=polo',
  (error, response, html) => {
    if(!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const siteHeading = $('.product-item');

      // console.log(siteHeading.html());
      // console.log(siteHeading.text());

      // const output = siteHeading.find('.product-name').text();

      // output = siteHeading.text().replace(/\s\s/g, '');

      output = siteHeading.text().replace(/\s\s/g, '\n');

      console.log(output);
    }
  }
);