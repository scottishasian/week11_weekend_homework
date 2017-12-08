var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function() {

  let hero;

  beforeEach(function() {
    hero = new Hero("Smaug", "Cheese");
  })

  it("Should have a name", function() {
    assert.strictEqual(hero.name, "Smaug")
  });



});
