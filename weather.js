$(document).ready(function() {
	
	function success(pos) {
		var location = pos.coords;
		var latitude = location.latitude;
		var longitude = location.longitude;
		
		console.log('Latitude: ' + latitude);
		console.log('Longitude: ' + latitude);
	};
	
	//Use this api to convert to location: https://developers.google.com/maps/documentation/geocoding/start?csw=1
		
	function error(err) {
		console.warn('ERROR: ' + err.code + '- '  + err.message);
	}
	
	navigator.geolocation.getCurrentPosition(success, error);
	
});