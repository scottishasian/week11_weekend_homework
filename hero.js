const Hero = function(name, favouriteFood, speech) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.balance = 0;
  this.speech = speech;
}

Hero.prototype.talk = function() {
  return `${this.name} says ${this.speech}`
};

Hero.prototype.eatFood = function(food) {
  if(this.favouriteFood === food.name){
    let boost = food.healingValue * 1.5;
    this.health += boost;
  }else{
    this.health += food.healingValue;
  }
}

Hero.prototype.getTask = function(task) {
  this.tasks.push(task);
}
Hero.prototype.completeTask = function(task) {
  let goal = this.tasks.forEach(function(objective){
    if(objective.quest === task){
      this.balance += objective.reward;
      objective.doTask(); //Does not add to balance.
    }
  });
}

module.exports = Hero;
