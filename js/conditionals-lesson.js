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

let flavor = prompt(`What's your preferred Ice Cream Flavor?`);

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

const serveIceCream = (flavor) => {
	if (flavor === `chocolate`
		|| flavor === `vanilla`
		|| flavor === `strawberry`){
		alert(`One ${flavor} coming up!`);
	} else {
		alert(`We don't have that flavor.`);
	}
}
serveIceCream(prompt(`What's your preferred Ice Cream Flavor?`).toLowerCase());

const divisibleByFive = num => {
	if (num % 5 === 0){
		console.log(`Divisible by 5`);
	} else {
		console.log(`Not divisible by 5`);
	}
}

const divisibleByFiveTernary = num => {
	num % 5 === 0 ? console.log(`Divisible by 5.`) : console.log(`Not divisible by five.`);
}
