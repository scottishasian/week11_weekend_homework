const Task = function(quest, difficultyLevel, urgencyLevel, reward, action) {
  this.quest = quest;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = false;
  this.action = action;
}

Task.prototype.doTask = function() {
  let result = this.action();
  this.completeTask();
  return result;
}

Task.prototype.completeTask = function() {
  this.complete = !this.complete; //toggle function
}




module.exports = Task;
