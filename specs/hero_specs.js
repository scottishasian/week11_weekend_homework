var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');

describe('Hero', function() {

  let hero;

  beforeEach(function() {
    hero = new Hero("Burnt Face Man", "Cheese", "\"Thats not crime, that is just a box with crime written on it.\"");
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

  it("Should have catchphrase", function() {
    assert.strictEqual(hero.speech, "\"Thats not crime, that is just a box with crime written on it.\"")
  });

  it("Should be able to talk", function() {
    assert.strictEqual(hero.talk(), "Burnt Face Man says \"Thats not crime, that is just a box with crime written on it.\"")
  });

  it("Should have an empty list of tasks", function() {
    assert.strictEqual(hero.tasks.length, 0)
  });



});
