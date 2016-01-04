function Mammal(name){
  this.name = name;
  this.offspring = [];
}

Mammal.prototype.sayHello = function(){
  return "My name is " + this.name + ", I'm a Mammal";
}

Mammal.prototype.haveBaby = function(){
  var baby = new Mammal("Baby " + this.name);
  this.offspring.push(baby);
  return baby;
}

function Cat(name, color){
  Mammal.call(this, name);
  this.color = color;
  // plae haveBaby on the Cat.prototype Object.  Keep in mind, line 27 has to come first since you are re-assigning the Cat.prototype object
  // After line 27, you can place haveBaby on the Cat.prototype object.
  this.haveBaby = function(babyColor){
    var baby = new Cat("Baby " + this.name, babyColor);
    this.offspring.push(baby);
    return baby;
  }
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
