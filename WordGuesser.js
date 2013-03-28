var wordLetters = ["f", "o", "x"];
var guessLetters = [];
var i = 0;



function guessLetter(guess){
	for (var i = 0; i < wordLetters.length; i ++){
		if (guess == wordLetters[i]){
			guessLetter[i] = guess;
			var remainingWordLetters = wordLetters.length - i;
			console.log("You've guessed the correct letter, " + guess + "!");
		// } else if (guess != wordLetters[i] && i == wordLetters.length) {
		} else if (guess != wordLetters[i] && i == wordLetters.length) {
			console.log("Congratulations, you've guessed all the correct letters!"); 
		} 	
	}
}

	var guess = prompt("Guess the letters!", "Type in one letter.");
	// Call function
	guessLetter(guess);


//Write a function called squareNumber that will take one argument (a number), square that //number, and return the result. It should also log a string like "The result of squaring //the number 3 is 9."

// function squareNumber(num){
// 	var result = num*num;
// 	return (console.log("The result of squaring the number " + num + " is " + result + "."));

// }
// Array Syntax: 
// var arrayName = [element0, element1, ...];
// The length property reports the size of the array:
// console.log(rainbowColors.length);
// for (initialize; condition; update) {