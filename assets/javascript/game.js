// Prompt user to play 


var wins = 0;
var losses = 0;
var lettersGuessed = [];
// var placeholder = ["_", "_", "_", "_", "_", "_", "_"];
var guessesleft = 12;
var i = 0;
var x = 0;
var correctguesses = 0;
var solutions = [
    ["b", "e", "n", "g", "a", "l"],
    ["a", "b", "y", "s", "s", "i", "n", "i", "a", "n"],
    ["r", "a", "g", "d", "o", "l", "l"],
    ["s", "i","a", "m", "e", "s", "e"],
    ["b", "u", "r", "m", "e", "s", "e"],
    ["m", "a", "n", "x"],
    ["p", "e", "r", "s", "i", "a", "n"],
    ["b", "o", "m", "b", "a", "y"],
    ["h", "i", "m", "a", "l", "a", "y", "n"],
    ["s", "i", "b", "e", "r", "i", "a", "n"]
];

// Computer to choose next word to be guessed from word list. Words are set up as arrays with 1 letter per index.

//User selects a key. 


document.onkeyup = function (event) {
    var userGuess = event.key;



    function checkletter(letter) {
        return letter === userGuess;
    }

    // reveal letter in position;

    if (solutions[x].some(checkletter)) {
        for (i = 0; i < solutions[x].length; i++) {
            if (userGuess === solutions[x][i]) {
                document.getElementById(i).innerHTML = solutions[x][i];
                correctguesses++;
                if (correctguesses === solutions[x].length) {
                    wins++;
                    document.getElementById("gameswon").innerHTML = wins;
                    for (i = 0; i < solutions[x].length; i++ ) {
                         document.getElementsByTagName("li").item(0).innerHTML;
                        //  document.getElementByTagN

                        
                    }
                    x++;
                    guessesleft = 12;
                    lettersGuessed = [];

                    
                    document.getElementById("guessesremaining").innerHTML = guessesleft;
                    document.getElementById("lettersguessed").innerHTML = lettersGuessed.join(" ");

                    correctguesses = 0;
                } else {
                    continue;
                }




            } else {
                continue;
            }
        }

    } else {
        lettersGuessed.push(userGuess);

        document.getElementById("lettersguessed").innerHTML = lettersGuessed.join(" ");
        guessesleft = (guessesleft - 1);
        document.getElementById("guessesremaining").innerHTML = guessesleft;

        if (guessesleft === 0) {
            losses++;
            document.getElementById("gameslost").innerHTML = losses;
            for (i = 0; i < solutions[x].length; i++ ) {
                document.getElementById(i).innerHTML = "_";
            }
            x++;
            guessesleft = 12;
            lettersGuessed = [];

            
            document.getElementById("guessesremaining").innerHTML = guessesleft;
            document.getElementById("lettersguessed").innerHTML = lettersGuessed.join(" ");

            correctguesses = 0;

        }
    }

}


















// If letter has already been guessed then computer should take no action and wait for next guess

// push guessed letters to an array lettersguessed[];


// Player chooses letter and computer deducts 1 from "Guesses Remaining".

// Computer compares letter choice to letters in word by comparing to indexes of the array. Use charAt? or var n = str.includes("letterchosen");

// If letter matches then computer reveals its position in the word. (how to make the letter show up in the correct slot?) 

// If this is the final letter in the word the computer adds 1 to "Wins" and says "You Win!" and starts game over.

// If not the final letter then computer waits for user to select again.

// If letter doesn't match then computer adds it to the "Letters Already Guessed".


// If this was the last guess then the computer displays "You Lose!" and starts the game again.

// If this is not the last guess then the computer waits for user to select again.