const Food = function(name, healing) {
  this.name = name;
  this.healingValue = healing;
  this.isPoisoned = false;
}

module.exports = Food;
