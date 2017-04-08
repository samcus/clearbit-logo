'use strict';

const ClearbitLogo = require('../');

let logo = new ClearbitLogo

logo.suggestions('Amazon.com').then((companies)=>{
  console.log(companies);
});

logo.topSuggestion('Amazon').then((company) => {
  console.log(company);
});

logo.image('amazon.com').then((logoURL) => {
  console.log(logoURL);
});

logo.image('amazon.com', {size: 60, greyscale: true}).then((logoURL) => {
  console.log(logoURL);
});

logo.image('amazon.com', {size: 60}).then((logoURL) => {
  console.log(logoURL);
});

logo.image('amazon.com', { greyscale: true }).then((logoURL) => {
  console.log(logoURL);
});

logo.image('amazon.co', { greyscale: false }).then((logoURL) => {
  console.log(logoURL);
});
