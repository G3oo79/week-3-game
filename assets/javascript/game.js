/*first set computer to choose random word by typing on keyboard.
make the player see the letters on the screen.
if a letter is already chosen it can not be choosen again.
make the computer choose a random word.
player has to guess the word that the computer has chosen.
if a letter not correct take away a number from the oportunity list.
if a letter is guessed then prompt it in the screen.
if word is guessed than a "you win" should be accounted for by showing a 
number.if you don't guess the word than in "Loose"  it should also show a 
number.either after you guessing the word or running out of oportunities 
the game resets and you can start a new game.*/

/*vatiables this is the first step this always go first*/
var userOptions = ["wu tang clan",  "cypress hill",  "pete rock"];
var wordInput = "";
var indLetters = [];
var chosenLetter = "";
var missedLetter ="";
var dash = [];
var wins = "";
var loss = "";
var lifes = "";



document.onkeyup = function() {
	var user = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(user);
}

//Functions
function test () {
	wordInput = userOptions[Math.floor(Math.random() * userOptions.length)];
	console.log(wordInput);
	indLetters = wordInput.split("_");
	
	console.log(indLetters);



}

test();

function setDashes() {
	for (var i = 0; i < indLetters.lenght; i++)
		dash.push("_");
	console.log(wordInput);

}

setDashes();
 




 //console.log verifying code

