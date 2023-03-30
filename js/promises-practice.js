import {getters} from "./promises-practice-getters.js";
/*
    TODO: Using separation of concern principles, module syntax, and
        async/await, create a series of code that:
        - uses the star wars api: https://swapi.dev/
        - returns a specific planet
        - returns the eye color of a specific character
        - returns all of the data on a specific movie
        *BONUS* - Add it onto the DOM however you want


 */

(async () => {
	console.log(await getters.getPlanet(1));
	console.log(await getters.getAllPlanets());
	console.log(await getters.getCharacter(1));
	console.log(await getters.getMovie(1));
	console.log(await getters.getCharacterEyeColor(1));
} )();


