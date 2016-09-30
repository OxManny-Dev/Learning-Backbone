// Vehicle model

var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},

	start: function(){
		console.log("Vehicle started.");
	}
});

// Vehicles Collection
var Vehicles = Backbone.Collection.extend({model: Vehicle});

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber" + " started"));
	}
});




// Vehicle View
var VehicleView = Backbone.View.extend({
	tagName: 'li',

	events: {
		"click .delete": "onDelete"
	},

	onDelete: function(e){
		this.remove();
	},

	render: function(){
		var source = $('#vehicleTemplate').html();
		var template = _.template(source);

		this.$el.html(template(this.model.toJSON()));
		this.$el.attr("data-color", this.model.get('color'));

		return this;
	}
});

// Vehicles View
var VehiclesView = Backbone.View.extend({
	id: 'vehicles',

	tagName: 'ul',

	initialize: function(){
		bus.on('newVehicle', this.onNewVehicle, this);
	},

	render: function(){
		this.collection.each(function(vehicle){
			var vehicleView = new VehicleView({model: vehicle});
			this.$el.append(vehicleView.render().$el);
		}, this);

		return this;
		// The 2nd param of this helps us by not having to call self
	},

	onNewVehicle: function(registrationNumber){
		var car = new Car({registrationNumber: registrationNumber});
		var vehicleView = new VehicleView({model: car});
		this.$el.prepend(vehicleView.render().$el);
	}

});

// New Vehicle View
var NewVehicleView = Backbone.View.extend({
	events: {
		'click .add': 'onAdd'
	},

	render: function(){
		var source = $('#newVehicleTemplate').html();
		var template = _.template(source);
		this.$el.html(template());

		return this;
	},

	onAdd: function(){
		var input = this.$el.find('input');
		var registrationNumber = input.val();

		bus.trigger("newVehicle", registrationNumber);

		input.val("");
	}
});

var bus = _.extend({}, Backbone.Events);

// var vehicle = new Vehicle({registrationNumber: '1', id: 2});
var vehicles = new Vehicles([
	new Car({registrationNumber: '1', id: 1, color: 'blue'}),
	new Car({registrationNumber: '2', id: 2, color: 'yellow'}),
	new Car({registrationNumber: '3', id: 3, color: 'red'})
]);



$('#container')
	.append(new NewVehicleView().render().$el)
	.append(new VehiclesView({collection: vehicles}).render().$el);
