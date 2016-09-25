// Views

// Render the content
// Respond to DOM events(eg clicks, drag and drops, etc)
// More like Controllers in MVC
// Have a DOM element

var SongView = Backbone.View.extend({
    // Where we implement the render and logic
  render: function(){
    // this.$el contains the view's DOM element
    this.$el.html('Yeeee');
    // by convention we return a reference to the view
    // at the end of the render method
    return this;
  }
});

var songView = new SongView();
songView.render();

// using the html method to insert theviews Dom element inside the container
$('#container').html(songView.$el);


var SongView = Backbone.View.extend({
  // Usually views will be in divs
  // This is how to override it
  tagName: 'span',
  className: 'song',
  id: '1234',
  attributes: {
    "data-genre": 'Jazz'
  },
  render: function(){
    this.$el.html('Yeeee');
  }
});

var songView = new SongView();

songView.render();
$('#container').html(songView.$el);


// We can do this because we always return a reference to THIS from the render method of the view
$('#container').html(songView.render().$el);
