// Vehicle model

var Vehicle = Backbone.Model.extend({

	validates: function(attrs){
		if(!attrs.registrationNumber){
			return "Registration number is required"
		}
	},
});

// Vehicles Collection
var Vehicles = Backbone.Collection.extend({model: Vehicle});


// Vehicle View
var VehicleView = Backbone.View.extend({
	tagName: 'li',

	events: {
		"click .delete": "onDelete"
	},

	onDelete: function(e){
		// e.stopPropagation();
		this.remove();
	},

	render: function(){
		this.$el.html(this.model.get('registrationNumber') + ' <button class="delete">Delete</button>');
		this.$el.attr("id", this.model.id);
		this.$el.attr("data-color", this.model.get('color'));
		return this;
	}
});


var VehiclesView = Backbone.View.extend({
	tagName: 'ul',

	render: function(){
		var self = this;
		this.collection.each(function(vehicle){
			var vehicleView = new VehicleView({model: vehicle});
			self.$el.append(vehicleView.render().$el);
		})
	}
});



// var vehicle = new Vehicle({registrationNumber: '1', id: 2});
var vehicles = new Vehicles([
	new Vehicle({registrationNumber: '1', id: 1, color: 'blue'}),
	new Vehicle({registrationNumber: '2', id: 2, color: 'yellow'}),
	new Vehicle({registrationNumber: '3', id: 3, color: 'red'})
]);

// var vehicleView = new VehicleView({el: '#songs', collection: vehicle});
var vehiclesView = new VehiclesView({el :'#songs', collection: vehicles});
vehiclesView.render();
// vehicleView.render();
