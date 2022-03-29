function computerPlay() {
  let x = ["Rock","Paper","Scissors"];
  return console.log(x[Math.floor(Math.random()*x.length)]);
}

function playRound(playerSelection, computerSelection) {
  
}

let playerSelection = prompt("Choose rock, paper, or scissors:");
let computerSelection = computerPlay();