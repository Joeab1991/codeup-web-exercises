(function(){
	"use strict";

	const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	//const planetsArray;

	/**
	 * TODO:
	 * Convert planetsString to an array, and save it in a variable named
	 * planetsArray.
	 * console.log planetsArray to check your work
	 */
	let planetsArray = planetsString.split(`|`)
	console.log(planetsArray);

	/**
	 * TODO:
	 * Create a string with <br> tags between each planet. console.log() your
	 * results. Why might this be useful?
	 *
	 * BONUS:
	 * Create another string that would display your planets in an undordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */
	// let planetsBr = planetsArray.join(`<br>`);
	//
	// console.log(planetsBr);

	planetsArray.unshift(`<ul>`);

	console.log(planetsArray);

	planetsArray.push(`<ul/>`);

	console.log(planetsArray);

	let planetsUL = planetsArray.join(`<li>`);

	console.log(planetsUL);

	planetsArray.forEach(function (string)) {

	}
})();