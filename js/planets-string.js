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
	 */
	let planetsBr = planetsArray.join(`<br>`);

	console.log(planetsBr);

	 /*
	 * BONUS:
	 * Create another string that would display your planets in an undordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */


	let planetsUL = planetsArray.join(`</li><li>`);

	let planetsL = planetsUL.split(`,`);

	planetsL.splice(0, 0, `<ul><li>`);
	planetsL.splice(planetsL.length, 0, `</li></ul>`);

	console.log(planetsL.join(``).split(`,`).join(``));
})();