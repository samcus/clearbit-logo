'use strict';

const request = require('request');
const Promise = require('bluebird');

let config = {
  api: {
    logo: 'https://logo.clearbit.com/',
    autocomplete: 'https://autocomplete.clearbit.com/v1/companies/suggest'
  }
}

class ClearbitLogo{
  constructor(){ }

  suggestions(name){
    return new Promise((resolve, reject) => {
      resolve(getSuggestions(name));
    });
  }

  topSuggestion(name){
    return new Promise((resolve, reject) => {
      resolve(getTopSuggestion(name));
    });
  }

  image(website, size, greyscale){
    return new Promise((resolve, reject) => {
      resolve(getLogo(website, size, greyscale));
    });
  }
}

let getSuggestions = (query) => {
  return new Promise((resolve,reject) => {
    request(config.api.autocomplete + '?query=' + query, (err, response, body) => {
      resolve(JSON.parse(body));
    });
  });
}


let getTopSuggestion = (query) => {
  return new Promise((resolve, reject) => {
    request(config.api.autocomplete + '?query=' + query, (err, response, body) => {
      resolve(JSON.parse(body)[0]);
    });
  });
}

let getLogo = (query, options) => {
  return new Promise((resolve, reject) => {
    var sizeQuery = '';
    var greyscaleQuery = '';
    if (options){
      if (options.hasOwnProperty('size')){ sizeQuery = '?size=' + options.size; }
      if (options.hasOwnProperty('greyscale')){
        if(options.greyscale == true){ greyscaleQuery = '?greyscale=true'; }
      }
    }
    request(config.api.autocomplete + '?query=' + query, (err,response,body) => {
      resolve(JSON.parse(body)[0].logo + sizeQuery + greyscaleQuery);
    });
  });
}

module.exports = ClearbitLogo;
