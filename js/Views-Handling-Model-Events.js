// Views handling Model events

// Real time notification

// Polling (client keeps asking the server for information)
  // This can be costly as the application grows

// Pushing (server tells the client)
  // the server notifies the client thats interested
  // to know about the changes


var Song = Backbone.Model.extend({
  defaults: {
    listeners: 0
  }
});


var SongView = Backbone.View.extend({
  // This is called when we instantiate a new backbone object
  initialize: function(){
    // We are listening for a 'change' event on the model
    // All backbone models publish a 'change' events
    // Whenever one of their attributes are changed

    // If we set the attrs directly on the model
    // keeping track of the changes would be  hard or impossible

    // Here we are registering the render method
    // as the callback when the change event is triggered

    // 3rd parameter is to set the context
    // We need to set the context to the view itself
    // when the render method is called
    // otherwise the context would be set to the model
    this.model.on("change", this.onModelChange, this);

    // We dont always have to call the render method

  },

  onModelChange: function(){
    this.$el.addClass('some-class');
  },
  render: function(){
    this.$el.html(this.model.get('title') + " - Listeners " + this.model.get('listeners'));

    return this;
  }
});

var song = new Song({title: 'The Light'});

var songView = new SongView({el: '#songs', model: song});

songView.render();


song.set({listeners: 1});
// song.set('listeners', 1);

// To andle model events, we use the model.on method to register click handlers for them
