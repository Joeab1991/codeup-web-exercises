// let person = {
// 	firstName: "Joe",
// 	lastName: "Beltran",
// 	email: "jab102191@gmail.com"
// }

// const getMovie = () => {
// 	fetch(`https://swapi.dev/api/films/1/`)
// 		.then(response => response.json())
// 		.then(data => {
// 			return(data);
// 		}).catch(error => {
// 			console.log(error);
// 	});
// }
//
// async function getMovieAsync(){
// 	try {
// 		let response = await fetch(`https://swapi.dev/api/films/1/`)
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

const getPerson = async (person= 1 ) => {
	try {
		let response = await fetch(`https://swapi.dev/api/people/${person}/`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

(async ()=>{
	let personData = await getPerson(4);
	console.log(personData)
})();