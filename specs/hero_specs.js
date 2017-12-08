var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food =  require('../food.js');

describe('Hero', function() {

  let hero;
  let getBucket;
  let cheese;
  let cake;

  beforeEach(function() {
    hero = new Hero("Burnt Face Man", "Brie", "\"Thats not crime, that is just a box with crime written on it.\"");
    cheese = new Food("Brie", 10);
    cake = new Food("Cake", 5);
  })

  it("Should have a name", function() {
    assert.strictEqual(hero.name, "Burnt Face Man")
  });

  it("Should have health", function() {
    assert.strictEqual(hero.health, 100)
  });

  it("Should have favourite food", function() {
    assert.strictEqual(hero.favouriteFood, "Brie")
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

  it("Should have an empty list of tasks", function() {
    assert.strictEqual(hero.inventory.length, 0)
  });

  it("Should be able to eat food", function() {
    hero.eatFood(cake);
    assert.strictEqual(hero.health, 105)
  });

  it("Should give more health if favourite food", function() {
    hero.eatFood(cheese);
    assert.strictEqual(hero.health, 115)
  })



});
