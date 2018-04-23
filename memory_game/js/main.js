var cards = [ {
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png" 
	},
	{
		rank: "queen", 
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king", 
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}];
var cardsInPlay = [];

var checkForMatch = function () {
	// for (i = 0; i < cardsInPlay.length; i++) {
	// 	var showCard = document.getElementById('game-board').children[i];
	// 	showCard.setAttribute('src', showCard.getAttribute(cards.cardImage));
	// }
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
		}
		else {
			alert("Sorry, try again");
		}
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log(cardId);
	console.log("User flipped " + cards[cardId].rank);
	// cardsInPlay.push(this.getAttribute('data-id'))
	// console.log(cardsInPlay);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
}

var createBoard = function () {
	for (i = 0; i < cards.length; i++) {
		var backOfCard = document.createElement('img');
		backOfCard.setAttribute('src', "images/back.png");
		backOfCard.setAttribute('data-id', i);

		backOfCard.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(backOfCard);
	}
}

createBoard();