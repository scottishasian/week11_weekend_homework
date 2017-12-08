var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function() {

  let hero;

  beforeEach(function() {
    hero = new Hero("Burnt Face Man", "Cheese");
  })

  it("Should have a name", function() {
    assert.strictEqual(hero.name, "Burnt Face Man")
  });

  it("Should have health", function() {
    assert.strictEqual(hero.health, 100)
  });

  it("Should have favourite food", function() {
    assert.strictEqual(hero.favouriteFood, "Cheese")
  });

  it("Should be able to talk", function() {
    assert.strictEqual(hero.speech(), "Burnt Face Man says \"Thats not crime, that is just a box with crime written on it.\"")
  });



});
