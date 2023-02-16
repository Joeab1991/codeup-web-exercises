`use strict`;

// let i = 0
// let j = 1
// while (i < 16){
// 	i++;
// 	j += j;
// 	console.log(j);
// }

let allCones = randomNumber(50,100);
console.log(allCones)

do {
	let conesPerCustomer = randomNumber(1,5)
	if (allCones < conesPerCustomer) {
		console.log(`Cannot sell you ${conesPerCustomer}, I only have ${allCones}`)
	} else if (conesPerCustomer > 1) {
		console.log(`${conesPerCustomer} cones sold...`);
		allCones -= conesPerCustomer;
	} else {
		console.log(`${conesPerCustomer} cone sold...`)
		allCones -= conesPerCustomer;
	}
} while (allCones > 0);
	console.log(`Yay! I sold them all!`)

