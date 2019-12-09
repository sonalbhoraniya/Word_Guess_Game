// create word back from which to choose random hangman words 

var wordBank = ["zebra", "giraffe", "dolphin", "sloth", "ram", "kangaroo", "monkey"];

// empty string storing the word chose for the game 
var randomWord = "";

// empty array to hold the correct guesses 
var correctGuesses = [];

var indLetters = []; 

// empty variable to hold the number of dashes left 
var blanksLeft = 0;

// empty array to show the answer with dashes and correct guesses 
var answerDisplay = [];

// empty array to hold all the wrong letters guesses 
var wrongGuesses = [];

// variable for score of wins
var wins = 0;
var losses = 0;
var score = 0; 

// variable for number of guesses reset 
var guessesLeft = 12;


// randomize the word that is chosen from the word bank 

function letsPlay() {

    var guessesLeft = 12;

    // computer chooses random word 

    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    console.log("The random word chosen is: " + randomWord); // Testing via Console.Log

    indLetters = randomWord.split("");

    console.log("The current word's letters are: " + indLetters); // Testing via Console.Log

    blanksLeft = indLetters.length;

    console.log("The number of letters in the current word is: " + blanksLeft); // Testing via Console.Log

    // reset variables 

    answerDisplay = [];
    wrongGuesses = [];

    // create dashes for the length of the random word chosen 

    for (var i = 0; i < randomWord.length; i++) {
        answerDisplay.push("_");
        console.log(answerDisplay); // Testing via Console.Log
    }

    //Change HTML elements to display current information

    document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + guessesLeft;

    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    document.getElementById("score").innerHTML = "Score: " + score; 
    document.getElementById("guessedLetters").innerHTML = "Wrong letters you have guessed: " + wrongGuesses; 
    

}

function checkGuesses(guess) {


    var correctGuess = false;

    // iterate through the blanks and see if the guess is one of the letters 
    for (var i = 0; i < blanksLeft; i++) {
        if (indLetters[i] == guess) {
            correctGuess = true;
        }
    
    }

    if (correctGuess) {
        for (var j = 0; j < blanksLeft; j++) {
            if (indLetters[j] == guess) {
                answerDisplay[j] = guess;
            }
        }
        console.log(answerDisplay);
    }

    // otherwise, if the guess is wrong, lessen the remaining guesses by 1 and add the wrong guess to the list of wrong Guesses  

    else {
        wrongGuesses.push(guess);
        guessesLeft--
    }

    //testing via console
    console.log(answerDisplay);
    

}



function roundComplete() {
    console.log("Win count: " + wins + " | Loss Count: " + losses + " | Guesses Left: " + guessesLeft)

    //Update HTML with Game Stats
    document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + guessesLeft;
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
     document.getElementById("guessedLetters").innerHTML = "Wrong letters you have guessed: " + wrongGuesses.join(" ");
     document.getElementById("score").innerHTML = "Score: " + score; 

    if (indLetters.toString() == answerDisplay.toString()) {
        wins++;
        score++; 

        alert("you win!");

        // document.getElementById("win-counter").innerHTML = win; 

        letsPlay();
    }

    else if (guessesLeft == 0) {
        losses++;

        alert("you lose!");

        // document.getElementById("loss-counter").innerHTML = loss; 

        letsPlay();

    }

}

letsPlay();

document.onkeyup = function (event) {
    var userInput = event.key.toLowerCase();
    console.log("You Guessed the letter: " + userInput); // Testing via Console.Log

    checkGuesses(userInput);
    roundComplete();

}