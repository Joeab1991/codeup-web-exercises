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

	// Generate the map
	mapboxgl.accessToken = MAPBOX_API_TOKEN;
	const map = new mapboxgl.Map({
		container: 'map',
		projection: `globe`,
		style: 'mapbox://styles/mapbox/satellite-v9',
		zoom: 1,
		center: [-98.495141, 29.4246]
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



	//update html with five-day forecast
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

	// Update the five-day forecast based on default coordinates
	let fiveDayWeatherData = [];
	const updateFiveDayWeatherData = async (arry = [-98.495141, 29.4246]) => {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${arry[1]}&lon=${arry[0]}&units=imperial&appid=${OPENWEATHER_API_TOKEN}`);
		fiveDayWeatherData = await response.json();
		await updateEachDay(fiveDayWeatherData);
	};

	await updateFiveDayWeatherData()

	// Update the local weather based on default coordinates
	let updateCurrentDay = async (obj) => {
			let cloudCover = obj.weather[0].main;
			let date = formatUnixTimestamp(obj.dt);
			localWeather.querySelector(`img`).src = `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`;
			localWeather.querySelector(`.day`).innerHTML = `${obj.name}<br><small class="text-muted fst-italic fs-6">${cloudCover}</small><br><small class="text-muted fst-italic fs-6">${date}</small>`;
			localWeather.querySelector(`.temp`).innerHTML = `${Math.round(obj.main.temp)}°`;
			localWeather.querySelector(`.feelsLike`).innerHTML = `${Math.round(obj.main.feels_like)}°`;
			localWeather.querySelector(`.highTemp`).innerHTML = `H: ${Math.round(obj.main.temp_max)}°`;
			localWeather.querySelector(`.lowTemp`).innerHTML = `L: ${Math.round(obj.main.temp_min)}°`;
			localWeather.querySelector(`.humidity`).innerHTML = `${obj.main.humidity}%`;
			localWeather.querySelector(`.sunrise`).innerHTML = `${formatUnixTimestamp(obj.sys.sunrise).substring(formatUnixTimestamp(obj.sys.sunrise).indexOf(` `))}`;
			localWeather.querySelector(`.sunset`).innerHTML = `${formatUnixTimestamp(obj.sys.sunset).substring(formatUnixTimestamp(obj.sys.sunset).indexOf(` `))}`;
	};

	let currentWeatherData = [];
	const updateLocalWeatherData = async (arry = [-98.495141, 29.4246]) => {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${arry[1]}&lon=${arry[0]}&units=imperial&appid=${OPENWEATHER_API_TOKEN}`);
		currentWeatherData = await response.json();
		console.log(currentWeatherData);
		await updateCurrentDay(currentWeatherData);
	};

	await updateLocalWeatherData();

	// Update the five-day forecast based on search input
	searchButton.addEventListener(`click`,  async function(event){
		event.preventDefault();
		// geocode the search input
		let coords =await geocode(`${searchInput.value}`, MAPBOX_API_TOKEN).then(async function(result) {
			map.setCenter(result);
			map.setZoom(13);
			return result;
		});
		dayData = []; // Reset dayData to an empty array
		await updateFiveDayWeatherData(coords);
		await updateEachDay(fiveDayWeatherData);
		await updateLocalWeatherData(coords);
		await updateCurrentDay(currentWeatherData);
	});
})();
