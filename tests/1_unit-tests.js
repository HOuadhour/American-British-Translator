const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  suite("American to British", () => {
    test("Translate Mangoes are my favorite fruit.", () => {
      const input = "Mangoes are my favorite fruit.";
      const output = "Mangoes are my favourite fruit.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate I ate yogurt for breakfast.", () => {
      const input = "I ate yogurt for breakfast.";
      const output = "I ate yoghurt for brekkie.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate We had a party at my friend's condo.", () => {
      const input = "We had a party at my friend's condo.";
      const output = "We had a party at my friend's flat.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Can you toss this in the trashcan for me?", () => {
      const input = "Can you toss this in the trashcan for me?";
      const output = "Can you toss this in the bin for me?";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate The parking lot was full.", () => {
      const input = "The parking lot was full.";
      const output = "The car park was full.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Like a high tech Rube Goldberg machine.", () => {
      const input = "Like a high tech Rube Goldberg machine.";
      const output = "Like a high tech Heath Robinson device.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate To play hooky means to skip class or work.", () => {
      const input = "To play hooky means to skip class or work.";
      const output = "To bunk off means to skip class or work.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate No Mr. Bond, I expect you to die.", () => {
      const input = "No Mr. Bond, I expect you to die.";
      const output = "No Mr Bond, I expect you to die.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Dr. Grosh will see you now.", () => {
      const input = "Dr. Grosh will see you now.";
      const output = "Dr Grosh will see you now.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Lunch is at 12:15 today.", () => {
      const input = "Lunch is at 12:15 today.";
      const output = "Lunch is at 12.15 today.";
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
  });
  suite("British to American", () => {
    test("Translate We watched the footie match for a while.", () => {
      const input = "We watched the footie match for a while.";
      const output = "We watched the soccer match for a while.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Paracetamol takes up to an hour to work.", () => {
      const input = "Paracetamol takes up to an hour to work.";
      const output = "Acetaminophen takes up to an hour to work.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate First, caramelise the onions.", () => {
      const input = "First, caramelise the onions.";
      const output = "First, caramelize the onions.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate I spent the bank holiday at the funfair.", () => {
      const input = "I spent the bank holiday at the funfair.";
      const output = "I spent the public holiday at the carnival.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate I had a bicky then went to the chippy.", () => {
      const input = "I had a bicky then went to the chippy.";
      const output = "I had a cookie then went to the fish-and-fish-and-chip shop.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate I've just got bits and bobs in my bum bag.", () => {
      const input = "I've just got bits and bobs in my bum bag.";
      const output = "I've just got odds and ends in my fanny pack.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate The car boot sale at Boxted Airfield was called off.", () => {
      const input = "The car boot sale at Boxted Airfield was called off.";
      const output = "The swap meet at Boxted Airfield was called off.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Have you met Mrs Kalyani?", () => {
      const input = "Have you met Mrs Kalyani?";
      const output = "Have you met Mr.s Kalyani?";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Prof Joyner of King's College, London.", () => {
      const input = "Prof Joyner of King's College, London.";
      const output = "Prof. Joyner of King's College, London.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
    test("Translate Tea time is usually around 4 or 4.30.", () => {
      const input = "Translate Tea time is usually around 4 or 4.30.";
      const output = "Translate Tea time is usually around 4 or 4:30.";
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[0]);
    });
  });
  suite("Highlight Translation", () => {
    test("Highlight translation in Mangoes are my favorite fruit.", () => {
      const input = "Mangoes are my favorite fruit.";
      const output = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[1]);
    });
    test("Highlight translation in I ate yogurt for breakfast.", () => {
      const input = "I ate yogurt for breakfast.";
      const output = 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.';
      const locale = "american-to-british";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[1]);
    });
    test("Highlight translation in We watched the footie match for a while.", () => {
      const input = "We watched the footie match for a while.";
      const output = 'We watched the <span class="highlight">soccer</span> match for a while.';
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[1]);
    });
    test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
      const input = "Paracetamol takes up to an hour to work.";
      const output = '<span class="highlight">Acetaminophen</span> takes up to an hour to work.';
      const locale = "british-to-american";
      const translator = new Translator(locale, input);
      assert.deepEqual(output, translator.translate()[1]);
    });
  });
});
