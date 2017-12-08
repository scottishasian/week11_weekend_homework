const Hero = function(name, favouriteFood, tasks) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.speech = function() {
  return `${this.name} says \"Thats not crime, that is just a box with crime written on it.\"`
};

module.exports = Hero;
