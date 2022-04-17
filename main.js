//Let computer choose either between rock, paper, or scissors, and return the 
//output as a string.

function computerPlay() {
  let x = ["rock", "paper", "scissors"];
  let returnChoice = x[Math.floor(Math.random()*x.length)];
  return String(returnChoice);
}

//Function that plays a game of rock-paper-scissors.

function playRound(playerSelection = playerSelect,
  computerSelection = computerSelect) {
  
  console.log("You chose: " + playerSelection);
  console.log("The computer chose: " + computerSelection);

  if (playerSelection === computerSelection) {
    return("Tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return("You lose!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return("You win!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return("You win!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return("You lose!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return("You lose!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return("You win!");
  } else {
    location.reload();
    return(
      "You must not have given a valid input; refresh the page and try again!");
  }

}

//Function that plays a game of RPS with whatever input the user chose, then
//adds to either the win or lose counter, or adds to neither if there is a tie.

function counterCheck(string){
  let computerInput = computerPlay();
  let output = playRound(string, computerInput);
  userChoice.textContent = string.toUpperCase();
  computerChoice.textContent = computerInput.toUpperCase();

  if (output == "You win!") {
    winCount++;
    winCounter.textContent = winCount;
  } else if (output == "Tie!") {
    null;
  } else {
    lossCount++;
    lossCounter.textContent = lossCount;
  }

  if (winCount == 5 && winCount > lossCount) {
    result.textContent = "YOU WIN!";
  } else if (winCount == 5 && winCount < lossCount) {
    result.textContent = "THE COMPUTER WINS!";
  } else if (lossCount == 5 && winCount > lossCount) {
    result.textContent = "YOU WIN!";
  } else if (lossCount == 5 && winCount < lossCount) {
    result.textContent = "THE COMPUTER WINS!";
  }
}

//Declares variables corresponding to HTML classes

const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");
const winCounter = document.querySelector(".winCounter");
const lossCounter = document.querySelector(".lossCounter");
const result = document.querySelector(".result");
const userChoice = document.querySelector(".userChoice");
const computerChoice = document.querySelector(".computerChoice");

//Initializes two variables for counting winners and losers

let winCount = 0;
let lossCount = 0;

//If a player presses a button, play a game of RPS with that button's input.

buttonRock.addEventListener("click", () => {
  counterCheck("rock");
});
buttonPaper.addEventListener("click", () => {
  counterCheck("paper");
});
buttonScissors.addEventListener("click", () => {
  counterCheck("scissors");
});