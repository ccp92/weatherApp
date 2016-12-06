$(document).ready(function() {
	
	function success(pos) {
		var location = pos.coords;
		console.log (location);
		var latitude = location.latitude;
		var longitude = location.longitude;		
		console.log('Latitude: ' + latitude);
		console.log('Longitude: ' + longitude);
		
		function getWeather () {	
		$.ajax('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&amp;lon='+longitude+'&amp;&appid=0255623a589ef5ae8783928162fee2e3',
			{
				dataType: 'json',
				success: function(data) {
					var city = data.name;
					console.log(city);
					//This is returning the correct City
					var kelvin = data.main.temp;
					//Raw temperature output is in Kelvin by default.
					console.log(kelvin+'K');
					var celsius = Math.ceil((kelvin - 273.15));
					console.log(celsius+'C');
					var fahrenheit = Math.ceil((kelvin * 9/5 - 459.67));
					console.log(fahrenheit+'F');
					// Seems to be outputting a really high value. Need to figure out what's gone wrong here as the City is correct.
					var weather = data.weather[0].main;
					console.log(weather);
					
					$('#location').text(city);
					$('#temp').text(celsius+'C');
					$('#weather').text(weather);
					
				},
			});
		};
		
		getWeather();
		
	};
	
	//Use this api to convert to location: https://developers.google.com/maps/documentation/geocoding/start?csw=1
		
	function error(err) {
		console.warn('ERROR: ' + err.code + '- '  + err.message);
	}
	
	navigator.geolocation.getCurrentPosition(success, error);
	

	
});