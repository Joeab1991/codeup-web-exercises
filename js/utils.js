const isEvenOrOdd = (num) => num % 2 === 0 ? `even` : `odd`;
//console.log(isEvenOrOdd(0))
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let random = Math.floor((Math.random() * 3) + 1);