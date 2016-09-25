// Templating using Underscore

var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  render: function(){
    // We use the jQuery selector to get the script element that contains the template
    // we use the HTML method to get the markup
    // we then pass it to template method
    // which compiles the markup to a template
    // this template is a function
    // then we can call and supply data to it
    var template = _.template($('#songTemplate').html());
    var html = template(this.model.toJSON());
    // we then call that function with our model in JSON format
    // Underscore doesnt know anything about Backbone
    // So we have to use JSON because it needs JSON
    this.$el.html(html);
    return this;
  }
});

var song = new Song({title: 'The Light', plays: 10000});

var songView = new SongView({el: '#container', model: song});
songView.render();
