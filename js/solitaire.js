const deck = [
	{ suit: 'hearts', value: 'ace', face: '<img src="../images/Loteria/ace-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '2', face: '<img src="../images/Loteria/two-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '3', face: '<img src="../images/Loteria/three-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '4', face: '<img src="../images/Loteria/four-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '5', face: '<img src="../images/Loteria/five-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '6', face: '<img src="../images/Loteria/six-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '7', face: '<img src="../images/Loteria/seven-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '8', face: '<img src="../images/Loteria/eight-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '9', face: '<img src="../images/Loteria/nine-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: '10', face: '<img src="../images/Loteria/ten-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: 'jack', face: '<img src="../images/Loteria/jack-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: 'queen', face: '<img src="../images/Loteria/queen-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'hearts', value: 'king', face: '<img src="../images/Loteria/king-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: 'ace', face: '<img src="../images/Loteria/ace-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '2', face: '<img src="../images/Loteria/two-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '3', face: '<img src="../images/Loteria/three-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '4', face: '<img src="../images/Loteria/four-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '5', face: '<img src="../images/Loteria/five-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '6', face: '<img src="../images/Loteria/six-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '7', face: '<img src="../images/Loteria/seven-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '8', face: '<img src="../images/Loteria/eight-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '9', face: '<img src="../images/Loteria/nine-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: '10', face: '<img src="../images/Loteria/ten-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: 'jack', face: '<img src="../images/Loteria/jack-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: 'queen', face: '<img src="../images/Loteria/queen-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'diamonds', value: 'king', face: '<img src="../images/Loteria/king-diamond.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: 'ace', face: '<img src="../images/Loteria/ace-spade.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '2', face: '<img src="../images/Loteria/two-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '3', face: '<img src="../images/Loteria/three-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '4', face: '<img src="../images/Loteria/four-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '5', face: '<img src="../images/Loteria/five-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '6', face: '<img src="../images/Loteria/six-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '7', face: '<img src="../images/Loteria/seven-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '8', face: '<img src="../images/Loteria/eight-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '9', face: '<img src="../images/Loteria/nine-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: '10', face: '<img src="../images/Loteria/ten-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: 'jack', face: '<img src="../images/Loteria/jack-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: 'queen', face: '<img src="../images/Loteria/queen-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'spades', value: 'king', face: '<img src="../images/Loteria/king-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: 'ace', face: '<img src="../images/Loteria/ace-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '2', face: '<img src="../images/Loteria/two-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '3', face: '<img src="../images/Loteria/three-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '4', face: '<img src="../images/Loteria/four-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '5', face: '<img src="../images/Loteria/five-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '6', face: '<img src="../images/Loteria/six-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '7', face: '<img src="../images/Loteria/seven-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '8', face: '<img src="../images/Loteria/eight-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '9', face: '<img src="../images/Loteria/nine-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: '10', face: '<img src="../images/Loteria/ten-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: 'jack', face: '<img src="../images/Loteria/jack-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: 'queen', face: '<img src="../images/Loteria/queen-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'clubs', value: 'king', face: '<img src="../images/Loteria/king-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
];

let cardFace = document.querySelector(`.card-face`);
let cardBack = document.querySelector(`#card-back`)
let flip = document.querySelector(`#flipButton`)
let draw = document.querySelector(`#drawButton`)



cardFace.innerHTML = (deck[randomNumber(0,51)].face);

// cardFace.addEventListener(`click`, function (){
// 	if (cardFace.innerHTML == (deck[0].back)) {
// 		card.innerHTML = (deck[0].face);
// 	} else if (cardFace.innerHTML == (deck[0].face)) {
// 		cardFace.innerHTML = (deck[0].back);
// 	}
// })

flip.addEventListener(`click`, function(){
	cardBack.toggleAttribute(`hidden`);

})

draw.addEventListener(`click`, function(){
	cardFace.innerHTML = (deck[randomNumber(0,51)].face);
	if (cardBack.hasAttribute(`hidden`)) {
	cardBack.toggleAttribute(`hidden`);
	}
})