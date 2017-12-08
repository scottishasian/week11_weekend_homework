const Task = function(difficultyLevel, urgencyLevel, reward) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = false;
  // this.callback = callback;
}

Task.prototype.completeTask = function() {
  this.complete = !this.complete; //toggle function
}




module.exports = Task;
