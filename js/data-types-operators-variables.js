// let a = 1;
// let b = a++;
// let c = ++a;
// // what is the value of a, b, and c?
//console.log(`This is a: ${a}. This is b: ${b}. This is c: ${c}.`)
//
// let d = "hello";
// let e = false;
//
// d++;
// e++;
//
// console.log(`This is d: ${d}. This is e: ${e}.`)
//
// let perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
// console.log(`This is the third exercise: ${perplexed}.`)
//
/*let price = 2.7;
price = price.toFixed (2);

console.log(`This is the fourth exercise: ${price}.`)
*/
// let price2 = "2.7";
// price2 = price2.toFixed(2);
//
// console.log(`This is the fifth exercise: ${price2}.`)

// //console.log(isNaN(0))
//
// //console.log(isNaN(1))
//
// //console.log(isNaN(""))
//
// //console.log(isNaN("string"))
//
// //console.log(isNaN("0"))
//
// //console.log(isNaN("1"))
//
// //console.log(isNaN("3.145"))
//
// //console.log(isNaN(Number.MAX_VALUE))
//
// //console.log(isNaN(Infinity))
//
// //console.log(isNaN("true"))
//
// // console.log(isNaN(true))
// //
// // console.log(isNaN("false"))
// //
// // console.log(isNaN(false))
//
// // to illustrate why the isNaN() function is needed:
// //console.log(NaN == NaN)
//
// // console.log(!true)
// //
// // console.log(!false)
// //
// // console.log(!!true)
// //
// // console.log(!!false)
//
// // console.log(!!0)
// //
// // console.log(!!-0)
// //
// // console.log(!!1)
// //
// // console.log(!!-1)
// //
// // console.log(!!0.1)
// //
// // console.log(!!"hello")
// //
// // console.log(!!"")
// //
// // console.log(!!'')
// //
// // console.log(!!"false")
// //
// // console.log(!!"0")
//
// let sample = "Hello Codeup";
//
// //console.log(sample.length)
// //console.log(sample.toUpperCase())
// // console.log(sample.toLowerCase())
// sample = sample + ` students`
//
// console.log(sample.replace(`students`, `class`))
// console.log(sample.indexOf(`C`))
// console.log(sample.substring(6, 12))

// let theLittleMermaid = 3;
// let brotherBear = 5;
// let hercules = 1;
// let pricePerDay = 3;
// let totalPrice = (theLittleMermaid + brotherBear + hercules) * pricePerDay;
//
// console.log(totalPrice)
//
//
//
//
// let google = 400 * 6;
// let amazon = 380 * 4;
// let facebook = 350 * 10;
// let totalPay = (`$${google + amazon + facebook}`);
//
// console.log(totalPay);

// schoolClass != full && studentSchedule != classSchedule

//(numberOfItems > 2 || premiumMember) && !offerExpired;

let username = 'codeup';
let password = 'notastrongpassword';
let goodCombo = (5 <= password.length && password.length <= 20)
    && (password.indexOf(` `) !== 0 && password.indexOf(` `) !== password.length - 1)
    && (username.indexOf(` `) !== 0 && username.indexOf(` `) !== username.length - 1)
    && (password.indexOf(username) === -1)

console.log(goodCombo)
