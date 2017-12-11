const Rat = function(name, age) {
  this.name = name;
  this.age = age;
}

Rat.prototype.touchFood = function(food) {
  return food.poisonedFood();
}

module.exports = Rat;
