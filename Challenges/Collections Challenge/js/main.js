var Vehicle = Backbone.Model.extend({
	idAttribute: 'registrationNumber',

	urlRoot: '/api/vehicles',

	validate: function(attrs){
		if(!attrs.registrationNumber){
			return "Registration number is required";
		}
	},

	start: function(){
		console.log('vehicle is starting')
	}
})

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var vehicles = new Vehicles([
	new Vehicle({registrationNumber: 'XLI887', color: 'Blue'}),
	new Vehicle({registrationNumber: 'ZNP123', color: 'Blue'}),
	new Vehicle({registrationNumber: 'XUV456', color: 'Gray'})
]);


var blueCars = vehicles.filter(function(vehicle){
	return vehicle.get('color') === 'Blue';
});

console.log('The blue cars', blueCars)

var xl1887 = vehicles.where({registrationNumber: 'XLI887'});

// console.log(xl1887);

vehicles.remove(xl1887);

// console.log(xl1887);

console.log(vehicles.length)

vehicles.each(function(vehicle){
	console.log('Vehicle', vehicle.toJSON());
});
