var Vehicle = Backbone.Model.extend({
	idAttribute: 'registrationNumber',

	urlRoot: '/api/vehicles',

	validate: function(attrs){
		if(!attrs.registrationNumber){
			return "Registration number is rquired";
		}
	},

	start: function(){
		console.log('Vehicle started');
	}
});

var Car = Vehicle.extend({
	start: function(){
		console.log('Car with registrationNumber ' + this.get('registrationNumber') + ' started')
	}
});

var newCar = new Car({
	registrationNumber: 'XLI887',
	color: 'Blue'
});

newCar.unset('registrationNumber');

if(!newCar.isValid()){
	console.log(newCar.validationError)
}

newCar.set('registrationNumber', 'XLI887');

newCar.isValid();
