// Models > Inheritance

var Animal = Backbone.Model.extend({
  walk: function(){
    console.log('Animal is walking');
  }
});

// How to inherit atrributes from another Model
var Dog = Animal.extend();

var dog = new Dog();

dog.walk()


var Dog = Animal.extend({
  // This overrides the walk function in the Animal Model
  walk: function(){
    console.log("Dog is walking");
  }
});

var dog = new Dog();

dog.walk();

var Dog = Animal.extend({
  walk: function(){
    // Calls the walk method from the animal parent class
    Animal.prototype.walk.apply(this);
    console.log("Dog is walking");
  }
});
