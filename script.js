let currentRound = 1;
let numRounds = prompt("How many rounds would you like to play?");

function getComputerChoice() {
    let randInt =  Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return "rock";
    } else if (randInt === 1) {
        return "paper";
    } else if (randInt === 2) {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "canceled"){
        return "You canceled";
    } else if (playerSelection === "invalid"){
        return "You chose an invalid option. Please type R for rock, P for paper, or S for scissors.";
    }
    
    console.log("You chose " + playerSelection);
    console.log("Computer chose " + computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper";
    }
}

function askPlayerChoice(){
    
    let playerChoice = prompt("Round " + currentRound + ": What will you play? Type R for rock, P for paper, or S for scissors.");
    

    if (playerChoice ==='R' || playerChoice ==='r'){
        playerChoice = "rock";
    } else if (playerChoice ==='P' || playerChoice ==='p'){
        playerChoice = "paper";
    } else if (playerChoice ==='S' || playerChoice ==='s'){
        playerChoice = "scissors";
    } else if (playerChoice == null) {
        playerChoice = "canceled";
    } else {
        playerChoice = "invalid";
    }
    
    return playerChoice;
}

function game(numRounds){
    for (i = 1; i <= numRounds; i++){
        console.log("Round " + i);
        let playerChoice = askPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        currentRound++;
    }   
}

game(numRounds);