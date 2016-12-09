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
					var id = data.weather[0].id;
					console.log(id);
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
					
					if (id = 800) {
						$('#weather-image').attr('src','assets/22.png');
					} else if (id = 701||711||721||731||741||751||761||762||771||781) {
						$('weather-image').attr('src','assets/32.png');
					} else if (id = 200||201||202||210||211|212||221||230||231||232) {
						$('#weather-image').attr('src','assets/00.png');
					} else if (id = 300||301||302||310||311||312||313||314||321) {
						$('weather-image').attr('src','assets/09.png');
					} else if (id = 500||501||502||503||504||511|520||521||522||531) {
						$('weather-image').attr('src','assets/12.png')
					} else if (id = 600||601||602||611||612||615||616||620||621||622) {
						$('weather-image').attr('src','assets/14.png');
					} else if (id = 801||802||803||804) {
						$('weather-image').attr('src','assets/26.png');
					} else if (id = 951||952||953||954||955||956||957||958||959||960||961||962) {
						$('weather-image').attr('src','assets/23.png');
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