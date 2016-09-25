// Views handling Collection events

// Often useful for when models are added to or removed from the collection

// On situations like this, we would like the view to reflect the changes automatically

// EG messenger and chat

// Real world examples
// Facebook - Conversations
// Twitter - Tweets


var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({model: Song});

var SongView = Backbone.View.extend({

  tagName: 'li',

  render: function(){
    this.$el.html(this.model.get('title'));
    // jQuery attr function to set the id of this DOM element
    this.$el.attr("id", this.model.id);

    return this;
  }
});

var SongsView = Backbone.View.extend({

  tagName: 'ul',

  initialize: function(){
    this.model.on('add', this.onSongAdded, this);
    this.model.on('remove', this.onSongRemoved, this);
  },

  // Takes an argument that is passed in
  // in this case a song model
  // We pass it to song view to render this song
  // then we append it to our current view
  onSongAdded: function(song){
    var songView = new SongView({model: song});
    this.$el.append(songView.render().$el);
  },

  onSongRemoved: function(song){
    // Finds the element with that song id and remove it
    this.$el.find('li#' + song.id).remove();
  },

  render: function(){
    var self = this;
    this.model.each(function(song){
      var songView = new SongView({model: song});
      self.$el.append(songView.render().$el);
    });
  }
});


var songs = new Songs([
  new Song({id: 1, title: 'The Light'}),
  new Song({id: 2, title: 'Hero'}),
  new Song({id: 3, title: 'One Mic'})
]);

var songsView = new SongsView({el: '#songs', model: songs});
songsView.render();
