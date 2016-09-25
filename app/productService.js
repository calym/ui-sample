myApp.factory('productService', function(){
	
	return [
		{
			"name": "Funky Widget",
			"sku": 123,
			"price": 20.99,
			"features": [
				"Extra small form factor"
			]
		},
		{
			"name": "Wacky Doohickey",
			"sku" : 456,
			"price": 50,
			"features": [
				"Snap together construction",
				"multiple PWM outputs"
			]
		},
		{
			"name": "Nifty Thingamabob",
			"sku": 789,
			"price": 75,
			"features": [
				"supports .wav, ogg, and .mp3 files",
				"44.1 kHz sample rate",
				"CV output"
			]
		},
	]

});