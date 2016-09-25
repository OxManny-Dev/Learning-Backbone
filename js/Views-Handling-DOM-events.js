// Views Handling Dom elements

// Backbone Views have 2 major responsibilities


// 1. Render content
// 2. Respond to DOM events

var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  // to handle events raised by the DOM elements
  // we use the events property
  // which takes a hash of the event names
  // and their associated handlers
  events: {
    "click": "onClick",
    "click .bookmark": 'onClickBookmark'
  },

  onClick: function(){
    console.log('clicked')
  },

  onClickBookmark: function(e){
    // Stops this handler from being dispatched to any other handler in chain
    // Clicking this button without it will also trigger the onClick handler
    e.stopPropagation();
    console.log('Bookmarked');
  },

  tagName: 'li',

  className: 'song',

  render: function(){
    this.$el.html(this.model.get('title') + ' <button>Listen</button> <button class="bookmark">Bookmark</button>');
    return this;
  }
});


var song = new Song({title: 'The Light'});
var songView = new SongView({el: '#songs', model: song});
songView.render();
