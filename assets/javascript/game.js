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
var userOptions = [];
var inWord;
var dashes = [];
var wordSpan = "";
var letterInput = "";
var winnercnt = "";
//this counts incorrect letter.
var errcnt = "";
//this is counter for the correct letter
var counter = "";
// funtions to be done
var figureParts =[]; 
var figCnt = "";
var picend = "";
var wins = "";
var loss = ""; 
var lives = "";
var gamesLoss = "";
var gameswin = "";
var corransw = "";
var keysused = [];
var keyduplicate = "";



// funtions to be done
function init()	{

keyduplicate= "no";
figureParts[0] = document.getElementById( "headCover" ); 
figureParts[1] = document.getElementById( "neckCover" );
figureParts[2] = document.getElementById( "bodyCover" );
figureParts[3] = document.getElementById( "rightArmCover" );
figureParts[4] = document.getElementById( "leftArmCover" );
figureParts[5] = document.getElementById( "rightLegCover" );
figureParts[6] = document.getElementById( "leftLegCover" );
figureParts[7] = document.getElementById( "ropeCover" );

figCnt=0;
//are the counters to be referense to the html link.
wins = document.getElementById( "wincounter" );
loss = document.getElementById( "losscounter" );
lives = document.getElementById( "livescounter" );

winnercnt = 0;
//oicture link to html.
picend = document.getElementById( "picContainer" );

userOptions = ["wu tang clan",  "cypress hill",  "pete rock"];
//this is the id and span for the html link "word".
wordSpan = document.getElementById( "word" );
document.onkeypress = keypressResponse;
chooseWord();
setDashes();


}//ends init function.
//it grabs the keystrokesand compares them to the inWord
function keypressResponse(){
//picks up keystrokes and puts it in variable
errcnt = 0;
counter = 0;
//when keypress it creates a reference of that key
var keyNum = (window.event) ? event.keyCode : e.which;
//convertts to a string.
letterInput = String.fromCharCode(keyNum);
keysused.push(letterInput);

//
for (var x = 0; x < keysused.length; x++){
	if (keysused[x] === letterInput){

	keyduplicate = "yes"; 
     break; }
    else {
	keyduplicate = "no";}

}//for loop


document.getElementById( "message" ).innerHTML += keyduplicate;

if (keyduplicate === "no")
//compare letter input with every single character
for (var i = 0; i < inWord.length; i++) {
	if(inWord.charAt(i) === letterInput) {

	counter++;
	corransw++;

	dashes[i] = letterInput;
}//ends if statement.

//wrong letter function COUNTER executes after for loop.
else errcnt++;

}//ends for loop

//checks the letters do  not match and it calls the function, ok not working
if ((errcnt > 0) && (counter === 0))
wrongLetter();
//prints out new word
wordSpan.innerHTML = dashes.join("&nbsp");

if (winnercnt === corransw) {
	document.getElementById( "message" ).innerHTML = "You Win";
	wins.innerHTML = gameswin++;
}
} //ends keypressResponse function.

//when choosing a letter display it
function wrongLetter (){
	document.getElementById( "message" ).innerHTML += letterInput;
	//
	if (figCnt === 8) {
	  picend.style.background = "url(assets/images/HANGMAN2c.png)";
	  picend.style.backgroundPosition = "center";
	  picend.style.backgroundRepeat = "no-repeat";
	  picend.style.height = "400px";
      picend.style.width = "390px";
      picend.style.margin = "0 0 10px 20px";

      //this prints the number on html loses
    
      loss.innerHTML = gamesLoss++;

                           }//ends if


	//Please work!! hidde divs when error picture!!
	figureParts[figCnt].style.visibility = "hidden";
	figCnt++;
}

//
function chooseWord() {
inWord = userOptions[Math.floor(Math.random() * userOptions.length)];
console.log(inWord);
}

function setDashes(){
for (var i = 0; i < inWord.length; i++) {
	if(inWord.charAt(i) != " "){
	winnercnt++;
	dashes[i] = "_";


	}

	
}
wordSpan.innerHTML = dashes.join("&nbsp");
console.log(dashes.join(" "));

}



document.addEventListener( "DOMContentLoaded" , init , false ) ;

