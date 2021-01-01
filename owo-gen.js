'use strict';

const {Uwuifier} = require('Uwuifier');
const uwuifier = new Uwuifier({
  spaces: {
    faces: 0,
    actions: 0,
    stutters: 0
  },
  words: 0.8,
  exclamations: 0.8,
});
const fs = require('fs');

const en = JSON.parse(fs.readFileSync(__dirname + '/src/intl/en.json', 'utf8'));

console.log('Generating uwu language...')

const recurseOwo = (obj) => {
  if (typeof obj === 'string') {
    return uwuifier.uwuifySentence(obj);
  }
  Object.keys(obj).map(function(key, index) {
    obj[key] = recurseOwo(obj[key]);
  });
  return obj;
}
recurseOwo(en)
en['footer']['note'] = ' - Translated by {uwuifier}';
console.log(en);

fs.writeFileSync(__dirname + '/src/intl/en-emodeng.json', JSON.stringify(en, null, 4));
