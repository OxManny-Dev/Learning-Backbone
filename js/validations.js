
// Backbone Model Validations

// Say we want every song to have a title or else invalid
// To implement this we need to put the validate method in the model
var Song = Backbone.Model.extend({
  // Backbone automatically calls this method
  //  whenever we try to set a new attribute in a Song object
  // the argument here is a JS object containing all the model attributes
  validate: function(attrs){
    if(!attrs.title){
      // By convention, backbones expects us to
      // to return a string error message upon validating each attribute
      return 'Title is required';
    }
  }
});

var song = new Song();

// We can tell if a model is valid or not by calling isValid()
console.log(song.isValid());
//  -> false


// Gets the error from the last validation
song.validationError

song.set({
  title: 'Master Theses',
  artist: 'Canibus'
});

console.log(song.isValid());
// -> true
