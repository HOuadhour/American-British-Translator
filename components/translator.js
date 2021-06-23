const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

let usToUk = []

for (const key in americanOnly) usToUk.push([key, americanOnly[key]])

for (const key in americanToBritishSpelling) usToUk.push([key, americanToBritishSpelling[key]])

for (const key in americanToBritishTitles) usToUk.push([key, americanToBritishTitles[key]])

for (const key in britishOnly) usToUk.push([britishOnly[key], key])

class Translator {
  

}

module.exports = Translator;
