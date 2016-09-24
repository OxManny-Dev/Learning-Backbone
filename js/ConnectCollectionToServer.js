// Connecting to the server
// To retrieve collection from the server

var Songs = Backbone.Collection.extend({
  model: Song,
  url: '/api/songs'
});

var songs = new Songs()
songs.fetch();
// GET /api/songs


// Backbone uses jQuery to make AJAX calls

var songs = new Songs();

songs.fetch({
  data: {
    page: 2
  },
  success: function(){},
  error: function(){}
});

// GET /api/songs?page=2
