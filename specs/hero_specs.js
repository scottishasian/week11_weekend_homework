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

    callback = function() {
      return `I completed the quest: ${this.quest}.`;
    }

    hero = new Hero("Burnt Face Man", "Brie", "\"Thats not crime, that is just a box with crime written on it.\"");
    cheese = new Food("Brie", 10);
    cake = new Food("Cake", 5);
    getBucket = new Task("Get a bucket", 3, "Urgent", 100, callback);
    getChicken = new Task("Get a Chicken", 1, "Not Urgent", 20, callback);
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
    assert.strictEqual(hero.tasks.length, 0);
  });

  it("Should have an empty balance", function() {
    assert.strictEqual(hero.balance, 0);
  });

  it("Should be able to eat food", function() {
    hero.eatFood(cake);
    assert.strictEqual(hero.health, 105);
  });

  it("Should give more health if favourite food", function() {
    hero.eatFood(cheese);
    assert.strictEqual(hero.health, 115);
  })

  it("Should have one task", function() {
    hero.getTask(getBucket);
    assert.strictEqual(hero.tasks.length, 1);
  })

  it("Should be able to complete a task", function() {
    hero.getTask(getBucket);
    assert.strictEqual(hero.tasks.length, 1);
    hero.completeTask("Get a bucket");
    assert.strictEqual(getBucket.complete, true);
    assert.strictEqual(hero.balance, 100);
  })

  xit("Should be able to sort tasks", function() {
    hero.getTask(getBucket);
    hero.getTask(getChicken);
    assert.strictEqual(hero.tasks.length, 2);
    let result = hero.sortTasks();
    assert.deepStrictEqual(result, [getChicken, getBucket]);
  })

  it("Should be able to see completed tasks", function() {
    hero.getTask(getBucket);
    hero.getTask(getChicken);
    assert.strictEqual(hero.tasks.length, 2);
    hero.completeTask("Get a Chicken");
    assert.strictEqual(getChicken.complete, true);
    let result = hero.checkTasks("Complete");
    assert.deepStrictEqual(result, [getChicken])
  });

  xit("Should be able to see incomplete tasks", function() {
    hero.getTask(getBucket);
    hero.getTask(getChicken);
    assert.strictEqual(hero.tasks.length, 2);
  });





});
