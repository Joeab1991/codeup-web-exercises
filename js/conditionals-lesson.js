"use strict";


// const return2 = (num) => 2;
//
// console.log(return2());

// const sayHowdy = () => `Howdy`;
//
// console.log(sayHowdy())

// const returnName = () => `Joe`;
//
// console.log(returnName())

// const addThree = (num) => parseFloat(num) + 3
//
// console.log(addThree(5))
//
// const negativize = (num) => {
// 	if (typeof num === `string` || (parseFloat(num))) {
// 		return "That is not a number!";
// 	} else if (num > 0) {
// 		return -num;
// 	} else {
// 		return num;
// 	}
// }
// console.log(negativize(1))
//
// //const reverseString = (string) => (string.split(``).reverse().join(``));
// const reverseString = (string) => {
// 	let splitString = string.split(``)
// 	let reverseIt = splitString.reverse()
// 	return reverseIt.join(``)
// }
//
//
// console.log(reverseString(`bigfoot`))

//let flavor = prompt(`What's your preferred Ice Cream Flavor?`);

// if (flavor === `chocolate`){
// 	alert(`One chocolate coming up!`);
// } else {
// 	alert(`We don't have that flavor.`)
// }

// switch (flavor.toLowerCase()) {
// 	case `chocolate`:
// 		alert(`One chocolate coming up!`);
// 		break;
// 	case `vanilla`:
// 		alert(`One vanilla coming up!`);
// 		break;
// 	case `strawberry`:
// 		alert(`One strawberry coming up!`);
// 		break;
// 	default:
// 		alert(`We don't have that flavor.`);
// }

// const serveIceCream = (flavor) => {
// 	if (flavor === `chocolate`
// 		|| flavor === `vanilla`
// 		|| flavor === `strawberry`){
// 		alert(`One ${flavor} coming up!`);
// 	} else {
// 		alert(`We don't have that flavor.`);
// 	}
// }
// serveIceCream(prompt(`What's your preferred Ice Cream Flavor?`).toLowerCase());
//
// const divisibleByFive = num => {
// 	if (num % 5 === 0){
// 		console.log(`Divisible by 5`);
// 	} else {
// 		console.log(`Not divisible by 5`);
// 	}
// }
//
// const divisibleByFiveTernary = num => {
// 	num % 5 === 0 ? console.log(`Divisible by 5.`) : console.log(`Not divisible by five.`);
// }

// ### IF / ELSE IF / ELSE
//
// #### Create a function called `getToDestination` which will help determine how a person can get to their destination!
//
// 	It will accept 4 arguments and the parameter names are:
//
// 	- age - the age of the rider
// - isInsured - a boolean telling the function if the rider has insurance
// - hasCar - a boolean describing if the rider has a car
// - canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
//
// ---
// 	1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// 2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// 3. If the rider meets none of the above, they should call a friend for a ride!
//
// 	This `getToDestination` should not return any value, but rather console log based on the conditions met.
//
const canGetRideshare = (driversAvailable, walletFull) => (driversAvailable && walletFull === true);

let rideshareAble = canGetRideshare(false, true);
const getToDestination = (age, isInsured, hasCar) => {
	if ((age > 16) && (isInsured === true) && (hasCar === true)) {
		console.log(`Can use POV`);
	} else if (((age <= 16) || (isInsured === false) || (hasCar === false)) && (rideshareAble === true)) {
		console.log(`Call a rideshare`)
	} else
		console.log(`Call a friend`)
}

getToDestination(15, false, false)
// ---
// TODO
// #### getToDestination, part 2
//
// - Create a function called canGetRideshare() which will *RETURN* a boolean
// - It will determine if there are drivers nearby and the person has enough money for the ride
// - Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// - Call canGetRideshare() in the else if *after* !isLegalDriver &&...
// - Be sure to log to the user if they can or cannot get a rideshare
//

console.log(canGetRideshare(true, true))
// BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
// - Consider this: What if mileage determined:
// 	- If the rider has enough funds?
// 	- If there is a driver close enough to service the rider?
//
// 	---
// TODO
// ### SWITCH STATEMENTS
//
// Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
// - This will involve multiple switch statements and functions
// - Orchestrate the statements in a central function that is responsible for calling and checking for errors
// 	each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
// 	ie: `function getBodyStyle(input){return input}`
//
//
// 	- For user input, either use the browser's prompt/confirm/alert methods or mock up user input by hard-coding values
//
//
// 	- The user should be able to enter their
// 	- Body style (2D, 4D, etc)
// 	- Vehicle type (sports car, sedan, compact, truck, etc)
// 	- Vehicle color
//
//
// 	- Each switch statement should confirm the user's choice in a logging statement
//
//
// 	- The point of this is to validate what the user enters.
// 	- If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
// 		ie: default: `"error: " + vehicleType + " not recognized"`;
// 	- If this occurs, call the related function again (see: recursion) until the user enters a correct choice
// 	- HINT: a way you can check for errors is to see if the string contains the word "error"
//
//
// 	- After all switch statement functions successfully return the user's input,
// 	concatenate them all into a nicely-formatted string and return all data to the user
