
// Models > Connecting to Server


// Client                          Server

// fetch()  -> jQuery AJAX  ->     REST API

// Persistent Operations

// GET
fetch();
// POST/PUT
save();
// DELETE
destroy();

// How does backbone know the url to the API?

// Backbone relies on the url root property of your models
//  to contruct the url to the corresponding end point
// if we dont specify the url to the models
// we will get an error saying the url is not defined

// this is an example that all our songs are in
// exanple.com/api/songs
var Songs = Backbone.Model.extend({
  urlRoot: '/api/songs'
});


// Fetching a Model

var song = new Song({id : 1});
song.fetch();

// GET /api/songs/1



// Updating a model
// Since we've alteady fetched song once,
// Backbone knows that it exist so it updates the model
song.set('title', 'newTitle');
song.save();
song.fetch();
// PUT /api/songs/1


// Inserting a model
var song = new Song();
song.set('title', 'Title');
song.save();

// POST /api/songs


// Deleting a model
var song = new Song({id: 1});
song.destroy();

// DELETE /api/songs/1


// By convention, Backbone assumes that your models
// have an attribute called 'id'
var Song = Backbone.Model.extend({
  // This tells backbone which attribute is used as the identifier
  idAttribute: 'songId'
});


// All of these methods are async and take a success and error callback
var song = new Song();

// GET
song.fetch({
  success: function(){},
  error: function(){}
});

// DELETE
song.destroy({
  success: function(){},
  error: function(){}
});

// UPDATE
// 1st arg is Hash of attr to save
// Note that if we forget to pass the 1st arg, the callsbacks wont be executed at all
song.save({}, {
  success: function(){},
  error: function(){}
});
