const Hero = function(name, favouriteFood, tasks) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

module.exports = Hero;
