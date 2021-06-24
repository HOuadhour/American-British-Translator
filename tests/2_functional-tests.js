const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("Translation with text and locale fields: POST request to /api/translate", done => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Favorite",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.isNotEmpty(res.body);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        const translator = new Translator("american-to-british", "Favorite");
        assert.deepEqual(res.body.translation, translator.translate()[1]);
      });
    done();
  });

  test("Translation with text and invalid locale field: POST request to /api/translate", done => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Favorite",
        locale: "invalid :)",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.isNotEmpty(res.body);
        assert.property(res.body, "error");
        assert.deepEqual(res.body.error, "Invalid value for locale field");
      });
    done();
  });
  test("Translation with missing text field: POST request to /api/translate", done => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.isNotEmpty(res.body);
        assert.property(res.body, "error");
        assert.deepEqual(res.body.error, "Required field(s) missing");
      });
    done();
  });

  test("Translation with missing locale field: POST request to /api/translate", done => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Favorite",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.isNotEmpty(res.body);
        assert.property(res.body, "error");
        assert.deepEqual(res.body.error, "Required field(s) missing");
      });
    done();
  });

  test("Translation with empty text: POST request to /api/translate", done => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.isNotEmpty(res.body);
        assert.property(res.body, "error");
        assert.deepEqual(res.body.error, "No text to translate");
      });
    done();
  });

  test("Translation with text that needs no translation: POST request to /api/translate", done => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Favourite",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.isNotEmpty(res.body);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.deepEqual(res.body.translation, "Everything looks good to me!");
      });
    done();
  });
});
