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
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
		}
		else {
			alert("Sorry, try again");
		}
	}
}

var flipCard = function (cardID) {
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
}

var createBoard = function () {
	for (i = 0; i < cards.length; i++) {
		var newCard = document.createElement('img');
		newCard.setAttribute('game-board', "images/back.png");
}

flipCard(0);
flipCard(2);