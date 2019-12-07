// create word back from which to choose random hangman words 

var wordBank = ["zebra", "giraffe", "dolphin", "sloth", "ram", "kangaroo", "monkey"];

// empty string storing the word chose for the game 
var randomWord = "";

// empty array to hold the correct guesses 
var correctGuesses = []; 

// empty variable to hold the number of dashes left 
var blanksLeft = 0;

// empty array to show the answer with dashes and correct guesses 
var answerDisplay = [];

// empty array to hold all the wrong letters guesses 
var wrongGuesses = [];

// variable for score of wins
var score = 0;

// variable for number of guesses reset 
var guessesLeft = 12;

alert("hello");

// randomize the word that is chosen from the word bank 

function letsPlay() {

    // computer chooses random word 

    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    console.log("The random word chosen is: " + randomWord); // Testing via Console.Log

    indLetters = randomWord.split(""); 

    console.log("The current word's letters are: " + indLetters); // Testing via Console.Log
    
    blanksLeft = indLetters.length;

    console.log("The number of letters in the current word is: " + blanksLeft); // Testing via Console.Log

    // reset variables 

    guessesLeft = 12;
    answerDisplay = [];
    wrongGuesses = [];

    // create dashes for the length of the random word chosen 

    for (var i = 0; i < randomWord.length; i++) {
        answerDisplay.push("_");
        console.log(answerDisplay); // Testing via Console.Log
    }

    //Change HTML elements to display current information
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    //document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
    //document.getElementById("score").innerHTML = "Score: " + " " + score;
    
}




function checkGuesses(guess) {


        var correctGuess = false;

        // iterate through the blanks and see if the guess is one of the letters 
        for (var i = 0; i < blanksLeft; i++) {
            if (randomWord[i] == guess) {
                correctGuess = true;

            }

            // if the guess is one of the letters, then replace the dash with the letter 
            if(correctGuess) {
                for (var i = 0; i < blanksLeft; i++){
                    if(randomWord[i] == guess) {
                        answerDisplay[i] = guess; 
                    }
                }
            }

            // otherwise, if the guess is wrong, lessen the remaining guesses by 1 and add the wrong guess to the list of wrong Guesses  

            else {
                wrongGuesses.push(guess);
                guessesLeft--
            }

            //testing via console
            console.log(answerDisplay);

        }


}

letsPlay(); 

document.onkeyup = function (event){
    var userInput = event.key.toLowerCase();
    console.log("You Guessed the letter: " + userInput); // Testing via Console.Log

    checkGuesses(userInput); 

}