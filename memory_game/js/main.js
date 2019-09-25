alert('Hello, friends.');
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
var cards =["queen","queen","king","king"];
var cardsInPlay =[];
var cardOne = ["queen"];
cardsInPlay.push('clyde');
var cardTwo =["king"];
cardsInPlay.push("king");

console.log("User flipped " + cardOne);
console.log(cardsInPlay);
console.log("User flipped " + cardTwo);
if(cardsInPlay.length === 2){
	console.log("The length is " + cardsInPlay.length + " which are [" + cardsInPlay + "]");
}

if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}

// console.log("User flipped " + cardFour);