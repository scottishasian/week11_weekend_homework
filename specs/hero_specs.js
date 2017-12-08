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



});
