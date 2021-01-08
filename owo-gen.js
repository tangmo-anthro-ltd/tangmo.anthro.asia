'use strict';

const owo = require('@zuzak/owo');
const fs = require('fs');

const en = JSON.parse(fs.readFileSync(__dirname + '/src/intl/en.json', 'utf8'));

console.log('Generating uwu language...')

const recurseOwo = (obj) => {
  if (typeof obj === 'string') {
    return owo.translate(obj);
  }
  Object.keys(obj).map(function(key, index) {
    obj[key] = recurseOwo(obj[key]);
  });
  return obj;
}
recurseOwo(en)
en['footer']['note'] = ' - Translated by {uwuifier}';
en['contact']['telegram'] = 'Furrygram';
console.log(en);

fs.writeFileSync(__dirname + '/src/intl/en-emodeng.json', JSON.stringify(en, null, 4));
