// Passing Models and Collections to views

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

// Passing a Model to a view
// View for a song model

// Views will render whatever we pass into it
// once we call the render method
// on a new View instance
var SongView = Backbone.View.extend({
  tagName: 'li',
  className:'song',
  render: function(){
    this.$el.html(this.model.get('title'));
    return this;
  }
});

// Passing a Collection to a view
// View for songs collection
var SongsView = Backbone.View.extend({
  render: function(){
    // We declare self here because this
    // loses its value inside the new callback function
    var self = this;
    this.model.each(function(song){
      // Create a new instance of the SongView model
      // Note that the S is missing
      var songView = new SongView({model: song});
      self.$el.append(songView.render().$el);
    });
  }
});


// create a new instance of Song to render
var song = new Song({title: 'The Light'});


// create a new instance of Songs to render
var songs = new Songs([
  new Song({title: 'Master Thesis'}),
  new Song({title: 'The Truth'}),
  new Song({title: 'G.A.M.E'})
]);

// Creates a new View instance of the Song model
// var songView = new SongView({el: '#songs', model: song});
// renders the instane we created
// songView.render();

// Create a new View instance of the songs collection
var songsView = new SongsView({el: '#songs', model: songs});
songsView.render()
