var assert = require('assert');
var Food = require('../food.js');

describe('Food', function() {

  let cheese;

  beforeEach(function() {
    cheese = new Food("Brie", 10);
  })

  it("Should have a name", function() {
    assert.strictEqual(cheese.name, "Brie")
  })

  it("Should have healing value", function() {
    assert.strictEqual(cheese.healingValue, 10)
  })

  it("Should not be poisoned", function() {
    assert.strictEqual(cheese.isPoisoned, false)
  })

  it("Should be poisoned", function() {
    cheese.poisonedFood();
    assert.strictEqual(cheese.isPoisoned, true)
  })



})
