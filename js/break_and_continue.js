`use strict`;

let userNum;
// if ((userNum >= 1) && (userNum <= 50)) {
// 	alert(`Yikes! Skipping ${userNum}.`)
// 	} else {
// 	userNum = prompt(`Enter an odd number between 1 and 50.`);
// }

// while ((userNum < 1) || (userNum > 50) || (userNum % 2 === 0)) {
// 	userNum = prompt(`Enter an odd number between 1 and 50.`);
// }
while (true) {
	userNum = parseInt(prompt(`Enter an odd number between 1 and 50.`));
	if (userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
		break;
	}
}
console.log(`Number to skip is ${userNum}`)
for (let i = 1; i <= 50; i +=2) {
	if (i === userNum) {
		console.log(`Yikes! Skipping number ${userNum}`);
		continue;
	// } if (i % 2 !== 0) {
	}
		console.log(`Here is an odd number: ${i}`);
}




