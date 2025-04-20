let userScore = 0;
let compScore = 0;

let userTurn;
let compTurn;

let turns = ["temp", "rock", "paper", "scissors"];

let playButtons = document.querySelectorAll(".playBtn");

let statusText = document.querySelector("#statusBoxText");

let userScoreElem = document.querySelector("#userScore");
let compScoreElem = document.querySelector("#compScore");

playButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let clickedID = btn.id;
    compTurn = Math.floor(Math.random() * 3 + 1);

    switch (clickedID) {
      case "rockBtn":
        userTurn = 1;
        break;
      case "paperBtn":
        userTurn = 2;
        break;
      case "scissorsBtn":
        userTurn = 3;
        break;
    }

    if (
      (userTurn == 1 && compTurn == 1) ||
      (userTurn == 2 && compTurn == 2) ||
      (userTurn == 3 && compTurn == 3)
    ) {
      statusText.innerText = `${turns[userTurn]} and ${turns[userTurn]} is a tie`;
      compScore++;
    } else if (
      (userTurn == 1 && compTurn == 3) ||
      (userTurn == 2 && compTurn == 1) ||
      (userTurn == 3 && compTurn == 2)
    ) {
        userScore++;
        statusText.innerText = `${turns[userTurn]} beats ${turns[compTurn]}`;
    }
    else {
        compScore++;
        statusText.innerText = `${turns[compTurn]} beats your ${turns[userTurn]}`;
    }

    userScoreElem.innerText = userScore;
    compScoreElem.innerText = compScore;

  });
});
