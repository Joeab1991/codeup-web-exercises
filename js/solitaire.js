function Card(suit, value, face, back){
	this.suit = suit;
	this.value = value;
	this.face = face;
	this.back = back
}

let cards = [];

cards.push(new Card(`Spade`,
	`Ace`,
	`<img src="../images/Loteria/ace-spade.jpg" alt="ace of spades">`,
	`<img src="../images/Loteria/back-tarot.jpeg" alt="ace of spades">`));

console.log(cards[0].face)

let card = document.querySelector(`.card-wrapper`);

console.log(card);

card.innerHTML = (cards[0].face);

card.addEventListener(`click`, function (){
	if (card.innerHTML == (cards[0].back)) {
		card.innerHTML = (cards[0].face);
	} else if (card.innerHTML == (cards[0].face)) {
		card.innerHTML = (cards[0].back);
	}
})
