(async () => {
	"use strict";

	let localWeather = document.querySelector(`#localWeather`);
	console.log(localWeather.innerHTML)

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
	const updateLocalWeather = async () => {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=San Antonio,TX,US&appid=${OPENWEATHER_API_TOKEN}`);
		return await response.json();
	};

	let weatherData = await updateLocalWeather();
	console.log(weatherData)
	localWeather.innerHTML = `<h2 class="text-light lh-1">${weatherData.name}<br>
							<small class="text-muted fst-italic fs-5">${titleCase(weatherData.weather[0].description)}</small>
							<br>
							<small class="text-muted fst-italic fs-5">${formatUnixTimestamp(weatherData.dt)}</small>
							</h2>
							<ul class="list-group list-group-horizontal">
                                <li class="list-group-item border-0 flex-fill ps-0">Current Temperature:</li>
                                <li class="list-group-item border-0 text-end pe-0">${kelvinToFahrenheit(weatherData.main.temp)}°</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item border-0 flex-fill ps-0">Feels Like:</li>
                                <li class="list-group-item border-0 text-end pe-0">${kelvinToFahrenheit(weatherData.main.feels_like)}°</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill border-0 ps-0">H: ${kelvinToFahrenheit(weatherData.main.temp_max)}°</li>
                                <li class="list-group-item flex-fill border-0 text-end pe-0">L: ${kelvinToFahrenheit(weatherData.main.temp_min)}°</li>
							</ul>
							 <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill border-0 ps-0">Humidity:</li>
                                <li class="list-group-item border-0 text-end pe-0">${weatherData.main.humidity}%</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill border-0 ps-0">Sunrise:</li>
                                <li class="list-group-item border-0 text-end pe-0">${formatUnixTimestamp(weatherData.sys.sunrise).substring(formatUnixTimestamp(weatherData.sys.sunrise).indexOf(` `))}</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill border-0 ps-0">Sunset:</li>
                                <li class="list-group-item border-0 text-end pe-0">${formatUnixTimestamp(weatherData.sys.sunset).substring(formatUnixTimestamp(weatherData.sys.sunset).indexOf(` `))}</li>
                            </ul>`;

})();
