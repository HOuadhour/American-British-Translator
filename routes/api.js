"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  app.route("/api/translate").post((req, res) => {
    const text = req.body.text;
    const locale = req.body.locale;
    const translator = new Translator(locale, text);
    const ret = translator.translate();
    if (ret === -1) return res.json({ error: "Required field(s) missing" });
    else if (ret === -2) return res.json({ error: "No text to translate" });
    else if (ret === -3) return res.json({ error: "Invalid value for locale field" });
    else if (ret === 1)
      return res.json({
        text,
        translation: "Everything looks good to me!",
      });
    return res.json({
      text,
      translation: ret[1],
    });
  });
};
