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
					//Raw temperature output is in Kelvin by default. Needs to be converted.
					console.log(kelvin+'K');
					var celsius = Math.ceil((kelvin - 273.15));
					console.log(celsius+'C');
					var fahrenheit = Math.ceil((kelvin * 9/5 - 459.67));
					console.log(fahrenheit+'F');
					var weather = data.weather[0].main;
					//There is a nested array within weather so need to specify that I'm after the index 0 array.
					console.log(weather);
					
					$('#location').text(city);
					$('#temp').text(celsius+'C');
					//As I'm in the UK, this will use the Celsius result as a default. Will enable the temperature button later to switch between C and F.
					$('#weather').text(weather);
					
					$('#celsius').on('click', function() {
						$('#temp').text(celsius+'C');
					});
					//Temperature switch to Celsius
					
					
					$('#fahrenheit').on('click', function() {
						$('#temp').text(fahrenheit+'F');
					});
					//Temperature switch to Fahrenheit
					
					if (weather = 'clear') {
						$('#weather-image').attr('src','assets/32.png');
					} else if (weather = 'haze'|'mist') {
						$('weather-image').attr('src','assets/22.png');
					} else {
						$('weather-image').attr('src','assets/21.png');
					};
					
				},
			});
		};
		
		getWeather();
		
	};
		
	function error(err) {
		console.warn('ERROR: ' + err.code + '- '  + err.message);
	}
	
	navigator.geolocation.getCurrentPosition(success, error);
	
});