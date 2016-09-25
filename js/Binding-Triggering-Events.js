
// Binding and triggering custom events
var person = {
  name: "Mosh",

  walk: function(){
    this.trigger("walking", {
      speed: 1,
      startTime: "08:00"
    });
  }
};

_.extend(person, Backbone.Events);

// this runs when someone calls the person walk method
person.on("walking", function(e){
  console.log("walking");
  console.log("Event args", e);
});

person.walk();

// unsubscribe
person.off("walking");


person.walk();
