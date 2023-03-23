(() => {
	"use strict";

	// fetch(`https://api.openweathermap.org/data/2.5/weather?q=San Antonio,TX,US&appid=${OPENWEATHER_API_TOKEN}`)
	// 	.then(function(data) {
	// 	data.json()
	// 		.then(data => {
	// 			console.log(data);
	// 		})
	// });

	mapboxgl.accessToken = MAPBOX_API_TOKEN;
	const map = new mapboxgl.Map({
		container: 'map',
		projection: `globe`,
		style: 'mapbox://styles/mapbox/satellite-v9',
		zoom: 1,
		center: [-98.4916, 29.4252]
	});
	geocode("Port Hueneme, CA", MAPBOX_API_TOKEN).then(function(result) {
		console.log(result);
		map.setCenter(result);
		map.setZoom(1);
	});
	map.on('style.load', () => {
		map.setFog({
			color: 'rgb(186, 210, 235)', // Lower atmosphere
			'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
			'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
			'space-color': 'rgb(11, 11, 25)', // Background color
			'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
		});
	});
})();