function getComputerChoice() {
    let getComputerChoice = Math.random();
    switch (true) {
        case getComputerChoice < 0.34:
            return "rock";
        case getComputerChoice <= 0.67:
            return "paper";
        default:
            return "scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?", null).toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return "Please Choose between Rock, Paper, or Scissors!"
    }
}

function gameRound() {

    const computerSelection = getComputerChoice();

    console.log(computerSelection);

    const playerSelection = getPlayerChoice();

    console.log(playerSelection);

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === computerSelection) {
        return "It's a fre*king tie!";
    } else if (playerSelection == " " || playerSelection == null) {
        return "Please choose between 'Rock, Paper or Scissors'!";
    } else return "You win!"
}


function game() {
    return gameRound();
}

for (let i = 0; i < 5; i++) {
    console.log(game());;
}