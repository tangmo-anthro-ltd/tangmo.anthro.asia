'use strict';

const owo = require('@zuzak/owo');
const fs = require('fs');

const en = JSON.parse(fs.readFileSync(__dirname + '/src/intl/en.json', 'utf8'));
const previouslyTranslated = JSON.parse(fs.readFileSync(__dirname + '/src/intl/en-emodeng.json', 'utf8'));

console.log('Generating uwu language...');

const override = {
  Telegram: 'Furrygram',
};

const recurseOwo = (obj, previous) => {
  if (typeof obj === 'string') {
    if (typeof previous === 'string') {
      return previous;
    }
    if (obj in override) {
      return override[obj];
    }
    return owo.translate(obj);
  }
  Object.keys(obj).map(function (key, index) {
    obj[key] = recurseOwo(obj[key], previous?.[key]);
  });
  return obj;
};
recurseOwo(en, previouslyTranslated);

fs.writeFileSync(__dirname + '/src/intl/en-emodeng.json', JSON.stringify(en, null, 4));
