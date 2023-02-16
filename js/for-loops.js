`use strict`;

const showMultiplicationTable = num => {
	for (let i = 1; i <= 10; i++) {
		console.log(`${num} * ${i} = ${num * i}`);
	}
};
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

