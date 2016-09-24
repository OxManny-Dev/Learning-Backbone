// Making a model and settings attrs

var Song = Backbone.Model.extend({
  idAttribute: 'songId',
  urlRoot: '/api/songs',
  defaults: {
    downloads: 0
  },
  validate: function(attrs){
    if(!attrs.title){
      return 'Title is required';
    }
  }
});


var song = new Song({
  title: 'The light',
  artist: 'Common'
});

// Working with attrs

song.set('genre', 'hip hop');

var genre = song.get('genre');

song.unset('genre');

var hasGenre = song.has('genre');

song.clear();


// Validation

var isValid = song.isValid();
var lastError = song.validationError;


// Syncing with server
song.fetch({
  success: function(data){ console.log(data)},
  error: function(err){ console.log(err)}
});

song.save({},{
  success: function(data){ console.log(data)},
  error: function(err) { console.log(err)}
});


song.destroy({
  success: function(){ console.log('Model was destroyed')},
  error: function(err){ console.log(err)}
});
