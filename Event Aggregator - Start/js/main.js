// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// Event Aggregators

var Venue = Backbone.Model.extend();

var Venues = Backbone.Collection.extend({model: Venue});

var VenueView = Backbone.View.extend({
  tagName: 'li',

  initialize: function(options){
    // We do this to keep a reference to the bus
    this.bus = options.bus
  },

  events: {
    'click': 'onClick',
  },

  onClick: function(){
    // We supply the model behind the view as the model data
    // So any objects that subcribe to this event
    // will get the selected item and all its attributes
    this.bus.trigger("venueSelected", this.model);
  },

  render: function(){
    this.$el.html(this.model.get("name"));
    return this;
  }
});


var VenuesView = Backbone.View.extend({
  tagName: 'ul',

  id: 'venues',

  initialize: function(options){
    this.bus = options.bus;
  },

  render: function(){
    var self = this;
    this.model.each(function(venue){
      var view = new VenueView({model: venue, bus: self.bus});
      self.$el.append(view.render().$el);
    });
    return this;
  }
});

var MapView = Backbone.View.extend({
  el: '#map-container',

  initialize: function(options){
    this.bus = options.bus;
    this.bus.on("venueSelected", this.onVenueSelected, this);
  },

  onVenueSelected: function(venue){
    // We get the venue object that was published with the event
    // we store it as the model behind the map
    this.model = venue;
    // then render the map again
    this.render();
  },

  render: function(){
    // The reason we do this is because by default the map has no model
    if(this.model){
      this.$("#venue-name").html(this.model.get("name"));
      return this;
    }
  }
});

// Start with an empty JS object and extend it with backbone events
// We then pass it into each of the views
var bus = _.extend({}, Backbone.Events);

var venues = new Venues([
  new Venue({name: 'Philz Coffee'}),
  new Venue({name: 'Stabucks'}),
  new Venue({name: 'Coffee'})
]);

var venuesView = new VenuesView({model: venues, bus: bus});
$('#venues-container').html(venuesView.render().$el);

var mapView = new MapView({bus: bus});
mapView.render();
