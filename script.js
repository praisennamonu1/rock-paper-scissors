function getComputerChoice() {
    let getComputerChoice = Math.random();
    switch (true) {
        case getComputerChoice < 0.34:
            return "Rock";
        case getComputerChoice <= 0.67:
            return "Paper";
        default:
            return "Scissors";
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = prompt("Rock, Paper, or Scissors?", " ").toLowerCase();
console.log(playerSelection);

function firstRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a fre*king tie!";
    } else return "You win!"
}
console.log(firstRound(playerSelection, computerSelection));
