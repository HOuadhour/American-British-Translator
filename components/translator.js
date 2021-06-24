const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const usToUk = [];

for (const key in americanOnly) usToUk.push([key, americanOnly[key]]);

for (const key in americanToBritishSpelling) usToUk.push([key, americanToBritishSpelling[key]]);

for (const key in britishOnly) usToUk.push([britishOnly[key], key]);

function toCapitalize(text) {
  if (text.startsWith("<span")) {
    const pos = text.search(">") + 1;
    return text.slice(0, pos) + text[pos].toUpperCase() + text.slice(pos + 1);
  }
  return text[0].toUpperCase() + text.slice(1);
}

class Translator {
  constructor(locale, text) {
    this.locale = locale;
    this.text = text;
    this.translated = text;
    this.highlight = text;
  }

  translate() {
    if (this.text == undefined || this.locale == undefined) return -1;
    else if (this.text.length === 0) return -2;
    else if (this.locale === "american-to-british") {
      usToUk.forEach(item => {
        const re = new RegExp(`\\b${item[0]}\\b`, "gi");
        this.translated = this.translated.replaceAll(re, item[1]);
        this.highlight = this.highlight.replaceAll(re, `<span class="highlight">${item[1]}</span>`);
      });
      for (const key in americanToBritishTitles) {
        this.translated = this.translated.replaceAll(key, americanToBritishTitles[key]);
        this.highlight = this.highlight.replaceAll(
          key,
          `<span class="highlight">${americanToBritishTitles[key]}</span>`
        );
      }
      this.translated = this.translated.replaceAll(/([0-9]+):([0-9]+)/g, "$1.$2");
      this.highlight = this.highlight.replaceAll(/([0-9]+):([0-9]+)/g, '<span class="highlight">$1.$2</span>');
    } else if (this.locale === "british-to-american") {
      usToUk.forEach(item => {
        const re = new RegExp(`\\b${item[1]}\\b`, "gi");
        this.translated = this.translated.replaceAll(re, item[0]);
        this.highlight = this.highlight.replaceAll(re, `<span class="highlight">${item[0]}</span>`);
      });
      for (const key in americanToBritishTitles) {
        this.translated = this.translated.replaceAll(americanToBritishTitles[key], key);
        this.highlight = this.highlight.replaceAll(
          americanToBritishTitles[key],
          `<span class="highlight">${key}</span>`
        );
      }
      this.translated = this.translated.replaceAll(/([0-9]+)\.([0-9]+)/g, "$1:$2");
      this.highlight = this.highlight.replaceAll(/([0-9]+)\.([0-9]+)/g, '<span class="highlight">$1:$2</span>');
    } else {
      return -3;
    }

    this.translated = toCapitalize(this.translated);
    this.highlight = toCapitalize(this.highlight);

    return this.translated === this.text ? 1 : [this.translated, this.highlight];
  }
}

module.exports = Translator;
