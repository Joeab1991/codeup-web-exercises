`use strict`;

const showMultiplicationTable = num => {
	for (let i = 1; i <= 10; i++) {
		console.log(`${num} * ${i} = ${num * i}`);
	}
};

/*instructor version
const showMultiplicationTable = (number) => {
	let table = ``;
	for(let i = 1; i <= 10; i++){
		let daMath = parseInt(number) * i;
		let output = `${number} x ${i} = ${daMath}\n`;
		table = table + output;
	}
	return table;
}
 */

showMultiplicationTable(7);


for (let i = 1; i <= 10; i++) {
	let num = randomNumber(20, 200);
	console.log(`${num}${isEvenOrOdd(num)}`);
}

for (let i = 0; i < 10; i++) {
	let row = `${i}`.repeat (i);
	console.log(row);
}

for (let i = 100; i > 0; i -= 5) {console.log(i)}

