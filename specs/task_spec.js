var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {
  let task

  beforeEach(function() {
    getBucket = new Task("Hard", "Urgent", "Cheese", false);
    //, callback put callbacks in constructor later.
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

})
