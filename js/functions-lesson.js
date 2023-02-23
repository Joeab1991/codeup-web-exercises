"use strict"

//traditional method
// in the global, "hoisted". Can be placed anywhere.
// function helloWorld(){
//     alert(`Hello World!`)
// }

// arrow function
// const helloWorld = (name) => {
//     let message = `Hello ${name}`
//     return message;
// }
//
// let firstHello = helloWorld("Joe");
// console.log(firstHello);
// let secondHello = helloWorld(`Nolan`);
// alert(secondHello);

// const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`;
//
// console.log(highFive(`Joe`, `Nolan`));

//Create a function that determines if a function is even or odd

const isEven = (num) => num % 2 === 0;

console.log(isEven(3));

//IIFE (Immediately-invoked Function Expression) arrow function
(() => {


})();

// traditional IIFE
(function (){

})();

