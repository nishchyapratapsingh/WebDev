let userScore = 0;
let compScore = 0;

let userTurn;
let compTurn;

let turns = ["temp", "Rock", "Paper", "Scissor"];

let userTurnStatus = document.querySelector(".userTurnText");
let compTurnStatus = document.querySelector(".compTurnText");

let playButtons = document.querySelectorAll(".playBtn");

let statusText = document.querySelector("#statusBoxText");

let userScoreElem = document.querySelector("#userScore");
let compScoreElem = document.querySelector("#compScore");

let statusBox = document.querySelector(".statusBox");

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
    } else if (
      (userTurn == 1 && compTurn == 3) ||
      (userTurn == 2 && compTurn == 1) ||
      (userTurn == 3 && compTurn == 2)
    ) {
      userScore++;
      statusText.innerText = `${turns[userTurn]} beats ${turns[compTurn]}!`;
    } else {
      compScore++;
      statusText.innerText = `${turns[compTurn]} beats your ${turns[userTurn]}`;
    }

    userTurnStatus.innerText = `\t${turns[userTurn]}`;
    compTurnStatus.innerText = `\t${turns[compTurn]}`;

    userScoreElem.innerText = userScore;
    compScoreElem.innerText = compScore;

    if (userScore >= 5 || compScore >= 5) {
      userScore > compScore
      if (userScore > compScore) {
        statusText.innerHTML =
          "<p>Congratulations! You Won\t<i class='fa-solid fa-rotate-right'></i></p>";
          statusBox.classList.add("statusWon");

      } else {
        statusText.innerHTML =
          "<p>Comp wins! Try again\t<i class='fa-solid fa-rotate-right'></i></p>";
          statusBox.classList.add("statusLost");

      }
      

      playButtons.forEach((btn) => {
        btn.style.pointerEvents = "none";
        btn.style.opacity = "0.5";
      });

      statusBox.style.cursor = "pointer";
      statusBox.classList.add("expanded");
      statusBox.addEventListener("click", () => {
        location.reload();
      });
    }
  });
});
