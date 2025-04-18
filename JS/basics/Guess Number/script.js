let num = 9;
let guess;

alert("Guess a number between 0 and 20");

while (num !== guess) {
    guess = parseInt(prompt("Enter a number: "));
    if (num!==guess) alert("Guess again!");
}

alert("Correct!");