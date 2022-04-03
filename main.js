function computerPlay() {
  let x = ["rock", "paper", "scissors"];
  let returnChoice = x[Math.floor(Math.random()*x.length)];
  return String(returnChoice);
}

function playRound(playerSelection = playerSelect, computerSelection = computerSelect) {
  
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
    return("You must not have given a valid input; refresh the page and try again!");
  }

}

function game() {
  let winCount = 0;
  let lossCount = 0;

  for (let i = 0; i < 5; i++) {
    let userSelect = prompt("Enter rock, paper, or scissors").toLowerCase();
    let robotSelect = computerPlay();
    if (playRound(userSelect, robotSelect) == "You win!") {
      ++winCount;
      console.log(`You have won ${winCount} times!`);
    } else {
      ++lossCount;
      console.log(`You have lost ${lossCount} times!`);
    }
  }
  if (winCount > lossCount) {
    console.log(`YOU WON! ${winCount} is greater than ${lossCount}! Congratulations on beating the computer at rock paper scissors!`);
  } else if (winCount < lossCount) {
    console.log(`YOU LOST! ${lossCount} is greater than ${winCount}! Try again next time, and maybe you'll win if luck is on your side!`);
  } else {
    console.log(`A TIE HAS BEEN MADE! ${winCount} is the same as ${lossCount}! Try again if you're not satisfied with a draw, and have fun!`);
  }
}

let playerSelect = prompt("Enter rock, paper, or scissors").toLowerCase();
let computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));