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
    return("You lose! Paper beats rock!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return("You win! Rock beats scissors!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return("You win! Paper beats rock!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return("You lose! Scissors beats paper!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return("You lose! Rock beats scissors!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return("You win! Scissors beats paper!");
  }
  else {
    location.reload();
    return("You must not have given a valid input; refresh the page and try again!");
  }

}


let playerSelect = prompt("Enter rock, paper, or scissors").toLowerCase();
let computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));