let num = 9;
let guess;

alert("Guess a number between 0 and 20");

while (num !== guess) {
    guess = parseInt(prompt("Enter a number: "));

    if (guess === num) {
        alert("Correct!");
    }

    else if (guess <= 12 && guess >= 6) {
        alert("You are close!");
    }

    else if (guess > 12) {
        alert("Too high");
    }

    else if (guess < 6) {
        alert("Too low!");
    }

    else {
        alert("Enter Valid number!");
    }
}

alert("Thanks for playing");