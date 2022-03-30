function computerPlay() {
  let x = ["rock", "paper", "scissors"];
  let returnChoice = x[Math.floor(Math.random()*x.length)];
  console.log(returnChoice);
}