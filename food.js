const Food = function(name, healing) {
  this.name = name;
  this.healingValue = healing;
  this.isPoisoned = false;
}

Food.prototype.poisonedFood = function() {
  this.isPoisoned = !this.isPoisoned; //toggle function
  this.healingValue = this.healingValue * -1;
}

module.exports = Food;
