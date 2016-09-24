
// Collections

// A Backbone collection is a list of models

// EG A tweet is a models
// Tweets is the collection

// Collections are useful when you want to work with a group of models

var Song = Backbone.Model.extend();

// We can put models in the collection in 2 ways
// We can pass the initial array of models
// When creating the collection
var Songs = Backbone.Collection.extend({
  model: Song
});


// Or we can call the add method on instantiated collection

var songs = new Songs([
  new Song({ title: 'Song 1' }),
  new Song({ title: 'Song 2' }),
  new Song({ title: 'Song 3' })
]);


// Add method is provided by underscore and is supported by all backbone collections
songs.add(new Song({title: 'Song 4'}));

// Every backbone collection has a models and a length property

// length returns the number of models in collection
// models property gives direct access to the models

// Most the time we use get or at to access models in the collection
// At returns the model with the given index
songs.at(0);

// Another way to et this model is using its cid or client id
songs.get('c1');

// We can remove a model from a collection by calling remove
// remove method expects a model
songs.remove(songs.at(0));
songs.remove(songs.get('c1'));
