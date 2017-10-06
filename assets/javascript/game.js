// Prompt user to play 


var wins = 0;
var losses = 0;
var lettersguessed = [];
var guessesleft = 0;
var i = 0;

var madonna = ["m", "a", "d", "o", "n", "n", "a"];
// Computer to randomly? select word to be guessed from word list. Words are set up as arrays with 1 letter per index.





//User selects a key. 

document.onkeyup = function (event) {
    var userGuess = event.key;


    // lettersguessed.push(userGuess);
    // // document.getElementById("lettersguessed").innerHTML = lettersguessed;
    // console.log(userGuess);
    // console.log(madonna);
    // console.log(lettersguessed);
    



    lettersguessed.push(userGuess);
    document.getElementById("lettersguessed").innerHTML = lettersguessed;
    console.log(lettersguessed);

    //   console.log(lettersguessed.length);
    // function myfunction() {
    //     lettersguessed[lettersguessed.length] = (userGuess);
    //     document.getElementById("lettersguessed").innerHTML = lettersguessed;
    //     console.log(lettersguessed);
    // }


    // reveal letter in position;
    for (i = 0; i < madonna.length; i++) {
        if (userGuess === madonna[i]) {
            document.getElementById(i).innerHTML = madonna[i];



            // add letter to guessed list 





        };
    };



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