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

module.exports = Hero;
