export const getters = {

	getPlanet: async (id = 1) => {
		try {
			const response = await fetch(`https://swapi.dev/api/planets/${id}`);
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	},

	getAllPlanets: async () => {
		try {
		const response = await fetch(`https://swapi.dev/api/planets/`);
		return await response.json();
		} catch (error) {
			console.log(error);
		}
	},

	getCharacter: async (id = 1) => {
		try {
			const response = await fetch(`https://swapi.dev/api/people/${id}`);
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	},

	getCharacterEyeColor:  async (id) => {
		try	{
			const character = await getters.getCharacter(id);
			return character.eye_color;
		} catch (error) {
			console.log(error);
		}
	},

	getMovie: async (id = 1) => {
		try {
			const response = await fetch(`https://swapi.dev/api/films/${id}`);
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	}
};




