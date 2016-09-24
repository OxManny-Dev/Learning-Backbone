
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

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
