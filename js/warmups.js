/** TODO
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and
 * street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

let addr1 = '8646 Sunny Oaks';
let addr2 = '5408 Villa Nueva';


const convertAddressToObject = (address) => {
	let noSpace = address.split(' ');
	let streetNumber = noSpace[0];
	let streetName = `${noSpace[1]}` +` ${noSpace[2]}`;
	return {
		streetNumber: streetNumber,
		streetName: streetName
	};
}

console.log(convertAddressToObject(addr1))


/** TODO
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a
 * 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 */

let people= ([
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]);


function totalPets(personsArray){
	let total = 0;
	personsArray.forEach(person => total += person.pets);
	return total;
}

/** TODO
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in
 * that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

const minMax = (numbersArray) => {
	let min = numbersArray
}

/** TODO
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects
 * sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */

drinks = [
	{name: "lemonade", price: 50},
	{name: "lime", price: 10}
]

function sortDrinkByPrice(drinksArray){
	return drinksArray.sort((a, b) => a.price - b.price);
}

/** TODO
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

const moreCars = [
	{ make: 'Ford', model: 'Mustang', mileage: 34567 },
	{ make: 'Ford', model: 'F-150', mileage: 12345 },
	{ make: 'Ford', model: 'Escape', mileage: 45678 },
	{ make: 'Chevrolet', model: 'Camaro', mileage: 56789 },
	{ make: 'Chevrolet', model: 'Silverado', mileage: 23456 },
	{ make: 'Chevrolet', model: 'Equinox', mileage: 78901 },
	{ make: 'Buick', model: 'Enclave', mileage: 23456 },
	{ make: 'Buick', model: 'Regal', mileage: 56789 },
	{ make: 'Jeep', model: 'Wrangler', mileage: 34567 },
	{ make: 'Jeep', model: 'Grand Cherokee', mileage: 67890 },
	{ make: 'Dodge', model: 'Charger', mileage: 12345 },
	{ make: 'Dodge', model: 'Durango', mileage: 45678 },
	{ make: 'Lincoln', model: 'MKZ', mileage: 78901 },
	{ make: 'Lincoln', model: 'Navigator', mileage: 23456 },
	{ make: 'GMC', model: 'Sierra', mileage: 56789 },
	{ make: 'GMC', model: 'Terrain', mileage: 34567 },
	{ make: 'Ford', model: 'Focus', mileage: 12345 },
	{ make: 'Ford', model: 'Explorer', mileage: 45678 },
	{ make: 'Chevrolet', model: 'Impala', mileage: 23456 },
	{ make: 'Chevrolet', model: 'Suburban', mileage: 78901 },
	{ make: 'Buick', model: 'LaCrosse', mileage: 34567 },
	{ make: 'Jeep', model: 'Renegade', mileage: 12345 },
	{ make: 'Jeep', model: 'Compass', mileage: 45678 },
	{ make: 'Dodge', model: 'Challenger', mileage: 78901 },
	{ make: 'Lincoln', model: 'Continental', mileage: 23456 },
	{ make: 'Lincoln', model: 'Aviator', mileage: 56789 },
	{ make: 'GMC', model: 'Yukon', mileage: 34567 },
	{ make: 'GMC', model: 'Acadia', mileage: 12345 },
	{ make: 'Ford', model: 'Ranger', mileage: 45678 },
	{ make: 'Ford', model: 'Bronco', mileage: 78901 },
	{ make: 'Chevrolet', model: 'Malibu', mileage: 23456 },
	{ make: 'Chevrolet', model: 'Tahoe', mileage: 56789 },
	{ make: 'Buick', model: 'Encore', mileage: 34567 },
	{ make: 'Jeep', model: 'Cherokee', mileage: 12345 },
	{ make: 'Dodge', model: 'Journey', mileage: 45678 },
	{ make: 'Lincoln', model: 'Corsair', mileage: 78901 },
	{ make: 'GMC', model: 'Canyon', mileage: 23456 },
	{ make: 'Honda', model: 'Civic', mileage: 34567 },
	{ make: 'Honda', model: 'Accord', mileage: 12345 },
	{ make: 'Honda', model: 'CR-V', mileage: 45678 },
	{ make: 'Toyota', model: 'Corolla', mileage: 56789 },
	{ make: 'Toyota', model: 'Camry', mileage: 23456 },
	{ make: 'Toyota', model: 'Rav4', mileage: 78901 },
	{ make: 'Kia', model: 'Optima', mileage: 23456 },
	{ make: 'Kia', model: 'Sportage', mileage: 56789 },
	{ make: 'Kia', model: 'Soul', mileage: 34567 },
	{ make: 'Hyundai', model: 'Elantra', mileage: 67890 },
	{ make: 'Hyundai', model: 'Sonata', mileage: 12345 },
	{ make: 'Hyundai', model: 'Tucson', mileage: 45678 },
	{ make: 'Suzuki', model: 'Swift', mileage: 78901 },
	{ make: 'Suzuki', model: 'Vitara', mileage: 23456 },
	{ make: 'Mazda', model: 'CX-5', mileage: 56789 },
	{ make: 'Mazda', model: 'Mazda3', mileage: 34567 },
	{ make: 'Daihatsu', model: 'Charade', mileage: 12345 },
	{ make: 'Daihatsu', model: 'Mira', mileage: 45678 },
	{ make: 'Toyota', model: 'Yaris', mileage: 23456 },
	{ make: 'Toyota', model: 'Highlander', mileage: 56789 },
	{ make: 'Honda', model: 'Pilot', mileage: 78901 },
	{ make: 'Honda', model: 'CR-Z', mileage: 23456 },
	{ make: 'Suzuki', model: 'Jimny', mileage: 34567 },
	{ make: 'Suzuki', model: 'Celerio', mileage: 12345 },
	{ make: 'Mazda', model: 'CX-3', mileage: 45678 },
	{ make: 'Mazda', model: 'Mazda6', mileage: 78901 },
	{ make: 'Toyota', model: 'Tacoma', mileage: 23456 },
	{ make: 'Toyota', model: 'Sienna', mileage: 56789 },
	{ make: 'Kia', model: 'Stinger', mileage: 34567 },
	{ make: 'Kia', model: 'Niro', mileage: 12345 },
	{ make: 'Hyundai', model: 'Venue', mileage: 45678 },
	{ make: 'Hyundai', model: 'Santa Fe', mileage: 78901 },
	{ make: 'Daihatsu', model: 'Terios', mileage: 23456 },
	{ make: 'Daihatsu', model: 'Materia', mileage: 56789 },
	{ make: 'Suzuki', model: 'Alto', mileage: 34567 },
	{ make: 'Suzuki', model: 'Escudo', mileage: 12345 },
	{ make: 'Fiat', model: '500', mileage: 56789 },
	{ make: 'Fiat', model: 'Panda', mileage: 98765 },
	{ make: 'Fiat', model: 'Tipo', mileage: 12345 },
	{ make: 'Mercedes-Benz', model: 'C-Class', mileage: 12345 },
	{ make: 'Mercedes-Benz', model: 'E-Class', mileage: 78901 },
	{ make: 'Mercedes-Benz', model: 'S-Class', mileage: 23456 },
	{ make: 'BMW', model: '3 Series', mileage: 56789 },
	{ make: 'BMW', model: '5 Series', mileage: 98765 },
	{ make: 'BMW', model: 'X5', mileage: 23456 },
	{ make: 'Volvo', model: 'XC40', mileage: 56789 },
	{ make: 'Volvo', model: 'XC60', mileage: 98765 },
	{ make: 'Volvo', model: 'XC90', mileage: 12345 },
	{ make: 'Audi', model: 'A3', mileage: 78901 },
	{ make: 'Audi', model: 'A4', mileage: 23456 },
	{ make: 'Audi', model: 'Q5', mileage: 56789 },
	{ make: 'Jaguar', model: 'F-PACE', mileage: 23456 },
	{ make: 'Jaguar', model: 'XE', mileage: 98765 },
	{ make: 'Jaguar', model: 'XF', mileage: 12345 },
	{ make: 'Volkswagen', model: 'Golf', mileage: 56789 },
	{ make: 'Volkswagen', model: 'Jetta', mileage: 78901 },
	{ make: 'Volkswagen', model: 'Tiguan', mileage: 23456 },
	{ make: 'Fiat', model: 'Doblo', mileage: 12345 },
	{ make: 'Fiat', model: '500L', mileage: 56789 },
	{ make: 'Fiat', model: 'Spider', mileage: 98765 },
	{ make: 'Mercedes-Benz', model: 'GLE', mileage: 23456 },
	{ make: 'Mercedes-Benz', model: 'GLC', mileage: 56789 },
	{ make: 'Mercedes-Benz', model: 'GLA', mileage: 78901 },
	{ make: 'BMW', model: 'M3', mileage: 23456 },
	{ make: 'BMW', model: 'M5', mileage: 56789 },
	{ make: 'BMW', model: 'X3', mileage: 98765 },
	{ make: 'Volvo', model: 'S60', mileage: 12345 },
	{ make: 'Volvo', model: 'S90', mileage: 23456 },
	{ make: 'Volvo', model: 'V90', mileage: 56789 },
	{ make: 'Audi', model: 'Q3', mileage: 78901 },
	{ make: 'Audi', model: 'Q7', mileage: 23456 },
	{ make: 'Audi', model: 'TT', mileage: 56789 }
];


// Loop through the array and output the make, model, and mileage of every Ford. Then output the make, model, and mileage of every car whose make starts with 'F'.
//
// Output the make, model, and mileage of every car with mileage less than 25thousand.


// Write a function that takes in a car object and returns true or false depending on whether its mileage is less than 50K. (true if less than 50K, false if more than 50K).

// Want a more intense challenge? Sort the array alphabetically by make.

// moreCars.forEach (fordInfo => {
// 	let firstLetter = fordInfo.make[0];
// 	if (firstLetter === `F`)
// 		console.log(fordInfo.make, fordInfo.model, fordInfo.mileage);
// })
//
// moreCars.forEach (({make, model, mileage}) => {
// 	if (mileage < 25000) console.log(make, model, mileage);
// })

const lessThan50kMiles = (carObject) => {
	return carObject.mileage < 50000;
}

