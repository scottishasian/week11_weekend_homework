var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {
  let getBucket;
  let smashPot;
  let callback;

  beforeEach(function() {

    callback = function() {
      return `I completed the quest: ${this.quest}.`;
    }

    getBucket = new Task("Get a bucket", 3, "Urgent", 100, callback);
    //, callback put callbacks in constructor later.
    smashPot = new Task("Smash a pot", 1, "Not Urgent", 30, callback);
  })

  it("Should have quest specs", function() {
    assert.strictEqual(getBucket.quest, "Get a bucket")
  })

  it("Should have difficulty", function() {
    assert.strictEqual(getBucket.difficultyLevel, 3)
  })

  it("Should have urgency level", function() {
    assert.strictEqual(getBucket.urgencyLevel, "Urgent")
  })

  it("Should have reward", function() {
        assert.strictEqual(getBucket.reward, 100)
  })

  it("Should be able to check if incomplete", function() {
        assert.strictEqual(getBucket.complete, false)
  })

  it("Should be able to check if complete", function() {
        smashPot.completeTask();
        assert.strictEqual(smashPot.complete, true)
  })

  it("Should be able to do task", function() {
        const result = smashPot.doTask();
        assert.strictEqual(result, 'I completed the quest: Smash a pot.');
        assert.strictEqual(smashPot.complete, true);
  })

})
