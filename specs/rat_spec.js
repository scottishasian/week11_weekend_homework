var assert = require('assert');
var Food = require('../food.js');
var Rat = require('../rat.js');

describe('Rat', function() {

  let cheese;
  let rat;

  beforeEach(function() {
    cheese = new Food("Brie", 10);
    rat = new Rat("Jeff", 100);
  })

  it("Should have a name", function() {
    assert.strictEqual(rat.name, "Jeff")
  })

  it("Should have an age", function() {
    assert.strictEqual(rat.age, 100)
  })

  it("Should be able to interact with food", function() {
    rat.touchFood(cheese);
    assert.strictEqual(cheese.isPoisoned, true)
    assert.strictEqual(cheese.healingValue, -10)
  })



})
