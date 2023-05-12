'use strict';

const owo = require('@zuzak/owo');
const fs = require('fs');

const en = JSON.parse(fs.readFileSync(__dirname + '/src/intl/en.json', 'utf8'));

console.log('Generating uwu language...');

const override = {
  Telegram: 'Furrygram',
};

const owoify = text => {
  // Ignore texts to be substituted such as "Click {link} to learn more"
  const substrings = text.split(/([{}])/g);
  let inBraces = false;
  for (let i = 0; i < substrings.length; i++) {
    if (substrings[i] === '{') {
      inBraces = true;
    } else if (substrings[i] === '}') {
      inBraces = false;
    } else if (!inBraces) {
      substrings[i] = owo.translate(substrings[i]);
    }
  }
  return substrings.join('');
};

const recurseOwo = obj => {
  if (typeof obj === 'string') {
    if (obj in override) {
      return override[obj];
    }
    return owoify(obj);
  }
  Object.keys(obj).map(function (key, index) {
    obj[key] = recurseOwo(obj[key]);
  });
  return obj;
};
recurseOwo(en);

fs.writeFileSync(__dirname + '/src/intl/en-emodeng.json', JSON.stringify(en, null, 4));
