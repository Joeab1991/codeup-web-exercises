(function () {
'use strict';

	let slider = document.querySelector(`#zoom`);
	let level = slider.value;
	let favorite = document.querySelector(`#favorite`);
	let favorites = document.querySelector(`#favorites`)
	let threeFavs = [
		{
			name: `The Best Breakfast`,
			address: `5141 Saviers Rd, Oxnard, CA 93033`,
			type: `Breakfast Cafe`
		},
		{
			name: `Texas Roadhouse`,
			address: `2751 SE Military Dr, San Antonio, TX 78223`,
			type: `Steakhouse`
		},
		{
			name: `Chachi's Chucherias`,
			address: `2103 Palo Alto Rd, San Antonio, TX 78211`,
			type: `Snack Shop`
		}
	];

	slider.addEventListener(`change`, function (event){
		level = slider.value;
		map.setZoom(level);
	});

	favorite.addEventListener(`click`, function(){
		const bestBreakfastMarker = new mapboxgl.Marker()
			.setLngLat([-119.178135, 34.15407])
			.addTo(map);
		const bestBreakfastPopup = new mapboxgl.Popup()
			.setHTML('<p class="popup">The Best Breakfast!</p>');
		bestBreakfastMarker.setPopup(bestBreakfastPopup);
		map.setCenter(bestBreakfastMarker._lngLat);
		map.setZoom(18);
	});

	favorites.addEventListener(`click`, function(){
		threeFavs.forEach(function (restaurant) {
			geocode(`${restaurant.address}`, MAPBOX_API_TOKEN).then(function(result) {
				console.log(result);
				const restaurantsMarker = new mapboxgl.Marker()
					.setLngLat(result)
					.addTo(map);
				const favsPopup = new mapboxgl.Popup()
					.setHTML('<p class="popup">' + restaurant.name + `<br>` + `<em>` + restaurant.type + `</em>` + '</p>');
				restaurantsMarker.setPopup(favsPopup);
			});
		});
		map.setZoom(1);
	});
})();