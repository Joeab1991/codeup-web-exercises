let deck = [
	{ suit: 'Heart', value: 'ace', face: '<img src="../images/Loteria/ace-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '2', face: '<img src="../images/Loteria/two-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '3', face: '<img src="../images/Loteria/three-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '4', face: '<img src="../images/Loteria/four-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '5', face: '<img src="../images/Loteria/five-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '6', face: '<img src="../images/Loteria/six-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '7', face: '<img src="../images/Loteria/seven-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '8', face: '<img src="../images/Loteria/eight-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '9', face: '<img src="../images/Loteria/nine-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: '10', face: '<img src="../images/Loteria/ten-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: 'jack', face: '<img src="../images/Loteria/jack-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: 'queen', face: '<img src="../images/Loteria/queen-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Heart', value: 'king', face: '<img src="../images/Loteria/king-hearts.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: 'ace', face: '<img src="../images/Loteria/ace-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '2', face: '<img src="../images/Loteria/two-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '3', face: '<img src="../images/Loteria/three-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '4', face: '<img src="../images/Loteria/four-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '5', face: '<img src="../images/Loteria/five-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '6', face: '<img src="../images/Loteria/six-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '7', face: '<img src="../images/Loteria/seven-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '8', face: '<img src="../images/Loteria/eight-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '9', face: '<img src="../images/Loteria/nine-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: '10', face: '<img src="../images/Loteria/ten-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: 'jack', face: '<img src="../images/Loteria/jack-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: 'queen', face: '<img src="../images/Loteria/queen-diamonds.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Diamond', value: 'king', face: '<img src="../images/Loteria/king-diamond.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: 'ace', face: '<img src="../images/Loteria/ace-spade.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '2', face: '<img src="../images/Loteria/two-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '3', face: '<img src="../images/Loteria/three-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '4', face: '<img src="../images/Loteria/four-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '5', face: '<img src="../images/Loteria/five-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '6', face: '<img src="../images/Loteria/six-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '7', face: '<img src="../images/Loteria/seven-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '8', face: '<img src="../images/Loteria/eight-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '9', face: '<img src="../images/Loteria/nine-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: '10', face: '<img src="../images/Loteria/ten-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: 'jack', face: '<img src="../images/Loteria/jack-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: 'queen', face: '<img src="../images/Loteria/queen-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Spade', value: 'king', face: '<img src="../images/Loteria/king-spades.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: 'ace', face: '<img src="../images/Loteria/ace-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '2', face: '<img src="../images/Loteria/two-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '3', face: '<img src="../images/Loteria/three-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '4', face: '<img src="../images/Loteria/four-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '5', face: '<img src="../images/Loteria/five-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '6', face: '<img src="../images/Loteria/six-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '7', face: '<img src="../images/Loteria/seven-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '8', face: '<img src="../images/Loteria/eight-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '9', face: '<img src="../images/Loteria/nine-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: '10', face: '<img src="../images/Loteria/ten-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: 'jack', face: '<img src="../images/Loteria/jack-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: 'queen', face: '<img src="../images/Loteria/queen-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
	{ suit: 'Club', value: 'king', face: '<img src="../images/Loteria/king-clubs.jpg" alt="">', back: `<img src="../images/Loteria/back-tarot.jpeg" alt="card back">` },
];

let cardFace = document.querySelector(`.card-face`);
let cardBack = document.querySelector(`#card-back`)
let flip = document.querySelector(`#flipButton`)
let draw = document.querySelector(`#drawButton`)
let suitGuess = document.querySelector(`#suit`)
let valueGuess = document.querySelector(`#card-value`)
let score = document.querySelector(`#current-score`)
let currentCard = deck[randomNumber(0,51)];
let scoreUpdate = 0;

cardFace.innerHTML = currentCard.face;
score.innerHTML = scoreUpdate;

console.log(currentCard)

function removeGuess (suit, value) {
	if ((currentCard.suit === suit.toLowerCase()) || (currentCard.value === value.toLowerCase())) {
		deck = deck.filter(function(card) {
			return ((card.suit.toLowerCase() !== suit.toLowerCase()) || (card.value.toLowerCase() !== value.toLowerCase()));
		});
		return deck;
	}
}

function update (num) {
	if (num < 52) {
		scoreUpdate = 52 - num;
	} else {
	return 0;
	}
}


flip.addEventListener(`click`, function(){
	cardBack.toggleAttribute(`hidden`);
	removeGuess(suitGuess.value, valueGuess.value);
	update(deck.length)
	score.innerHTML = scoreUpdate;
})

draw.addEventListener(`click`, function(){
	currentCard = deck[randomNumber(0,deck.length-1)];
	cardFace.innerHTML = currentCard.face;
	if (cardBack.hasAttribute(`hidden`)) {
	cardBack.toggleAttribute(`hidden`);
	}
	console.log(currentCard);
})

suitGuess.addEventListener(`click`, function(){
	currentCard = deck[randomNumber(0,deck.length-1)];
	cardFace.innerHTML = currentCard.face;
	if (cardBack.hasAttribute(`hidden`)) {
		cardBack.toggleAttribute(`hidden`);
	}
	console.log(currentCard);
})

valueGuess.addEventListener(`click`, function(){
	currentCard = deck[randomNumber(0,deck.length-1)];
	cardFace.innerHTML = currentCard.face;
	if (cardBack.hasAttribute(`hidden`)) {
		cardBack.toggleAttribute(`hidden`);
	}
	console.log(currentCard);
})