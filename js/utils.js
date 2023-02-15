const isEvenOrOdd = (num) => num % 2 === 0 ? `Your number is even` : `Your number is odd`;
//console.log(isEvenOrOdd(0))
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let random = Math.floor((Math.random() * 3) + 1);

const isNumericAndNotNaN = (input) => {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}