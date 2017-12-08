var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {
  let getBucket;
  let smashPot;

  beforeEach(function() {
    getBucket = new Task("Hard", "Urgent", "Cheese");
    //, callback put callbacks in constructor later.
    smashPot = new Task("Easy", "Not Urgent", "T-shirt");
  })

  it("Should have difficulty", function() {
    assert.strictEqual(getBucket.difficultyLevel, "Hard")
  })

  it("Should have urgency level", function() {
    assert.strictEqual(getBucket.urgencyLevel, "Urgent")
  })

  it("Should have reward", function() {
        assert.strictEqual(getBucket.reward, "Cheese")
  })

  it("Should be able to check if incomplete", function() {
        assert.strictEqual(getBucket.complete, false)
  })

  it("Should be able to check if complete", function() {
        smashPot.completeTask();
        assert.strictEqual(smashPot.complete, true)
  })

})
