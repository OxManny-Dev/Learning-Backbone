// Working with Attributes

// Backbone Models store attributes differently from JS objects
 // With JS objects you simple get them by referencing them
var person = {};
person.name = "Emmanuel";
 console.log(person.name);

// Backbone Models set attributes in a Hash

var Song = Backbone.Model.extend({ });
var song = new Song();

song.set("title", "Blue in Green");

song.set({
  artist: 'Miles Davis',
  publishYear: '1959'
});

var song = new Song({
  title: 'Blue in Green',
  artist: 'Miles Davis',
  publishYear: '1959'
});


// We can get an attribute by calling get method
song.get('title');
// -> 'Blue in Green'

// Can remove a method by calling unset method
song.unset('title');

// Can remove all attributes by calling clear method
song.clear();

// Checks if an object has an attribute
song.has('title');


// Sometimes we want to set a default value to our objects
var Song = Backbone.Model.extend({
  defaults: {
    genre: 'Jazz'
  }
});
