(async () => {
	"use strict";

	let localWeather = document.querySelector(`#localWeather`);
	let searchInput = document.querySelector(`#searchInput`);
	let searchButton = document.querySelector(`#searchButton`);
	let day1 = document.querySelector(`.day1`);
	let day2 = document.querySelector(`.day2`);
	let day3 = document.querySelector(`.day3`);
	let day4 = document.querySelector(`.day4`);
	let day5 = document.querySelector(`.day5`);
	let sunrise = document.querySelector(`.sunrise`);
	let sunset = document.querySelector(`.sunset`);

	// Generate the map
	mapboxgl.accessToken = MAPBOX_API_TOKEN;
	const map = new mapboxgl.Map({
		container: 'map',
		projection: `globe`,
		style: 'mapbox://styles/mapbox/satellite-v9',
		zoom: 1,
		center: [-98.4916, 29.4252]
	});

	// Add the fog effect to the map
	map.on('style.load', () => {
		map.setFog({
			color: 'rgb(186, 210, 235)', // Lower atmosphere
			'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
			'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
			'space-color': 'rgb(11, 11, 25)', // Background color
			'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
		});

	});

	// Update the five-day forecast based on search input
	const updateFiveDayWeather = async (arry = [-98.4916, 29.4252]) => {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${arry[1]}&lon=${arry[0]}&units=imperial&appid=${OPENWEATHER_API_TOKEN}`);
		return await response.json();
	};



	searchButton.addEventListener(`click`,  async function(event){
		event.preventDefault();
		// geocode the search input
		let coords =await geocode(`${searchInput.value}`, MAPBOX_API_TOKEN).then(async function(result) {
			console.log(result);
			map.setCenter(result);
			map.setZoom(13);
			return result;
		});
		console.log(await updateFiveDayWeather(coords));
		return await updateFiveDayWeather(coords)
	});

	// Update the local weather based on default coordinates
	const updateLocalWeather = async () => {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=San Antonio,TX,US&appid=${OPENWEATHER_API_TOKEN}`);
		return await response.json();
	};


	let fiveDayWeather = await updateFiveDayWeather();
	let weatherData = await updateLocalWeather();
	console.log(weatherData);
	console.log(fiveDayWeather);

	//update html with weather data
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

	//update html with five-day forecast
	let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
	let dayCards = [day1, day2, day3, day4, day5];
	let dayData = [];

	let updateEachDay = async (obj) => {
		await obj.list.forEach((element) => {
			if (element.dt_txt.substring(element.dt_txt.indexOf(` `) + 1) === `12:00:00`) {
				dayData.push(element);
			}
		});
		await dayCards.forEach((element) => {
			let cloudCover = dayData[dayCards.indexOf(element)].weather[0].main;
			let date = formatUnixTimestamp(dayData[dayCards.indexOf(element)].dt);
			const unixTimestamp = dayData[dayCards.indexOf(element)].dt;
			const dateFromUnix = new Date(unixTimestamp * 1000); // convert Unix timestamp to milliseconds and create dateFromUnix object
			const dayOfWeek = dateFromUnix.toLocaleDateString('en-US', { weekday: 'long' }); // get day of the week as a string
			element.querySelector(`img`).src = `https://openweathermap.org/img/w/${dayData[dayCards.indexOf(element)].weather[0].icon}.png`;
			element.querySelector(`.day`).innerHTML = `${dayOfWeek}<br><small class="text-muted fst-italic fs-6">${cloudCover}</small><br><small class="text-muted fst-italic fs-6">${date}</small>`;
			element.querySelector(`.temp`).innerHTML = `${Math.round(dayData[dayCards.indexOf(element)].main.temp)}°`;
			element.querySelector(`.feelsLike`).innerHTML = `${Math.round(dayData[dayCards.indexOf(element)].main.feels_like)}°`;
			element.querySelector(`.highTemp`).innerHTML = `H: ${Math.round(dayData[dayCards.indexOf(element)].main.temp_max)}°`;
			element.querySelector(`.lowTemp`).innerHTML = `L: ${Math.round(dayData[dayCards.indexOf(element)].main.temp_min)}°`;
			element.querySelector(`.humidity`).innerHTML = `${dayData[dayCards.indexOf(element)].main.humidity}%`;
		});
	};

	await updateEachDay(fiveDayWeather);


})();
