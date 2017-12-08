const Hero = function(name, favouriteFood, speech) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.inventory = [];
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

module.exports = Hero;
