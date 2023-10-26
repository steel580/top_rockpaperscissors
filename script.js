let currentRound = 0;
let numRounds;
let playerWinCount = 0;
let computerWinCount = 0;

do {
    numRounds = prompt("How many rounds would you like to play?");
    console.log(numRounds);


    if (!(/^\d+$/.test(numRounds)) && numRounds != null) {
        alert("You have to enter a number.")
    }
    if (numRounds == null) {
        alert("You don't want to play");
    }

} while (!(/^\d+$/.test(numRounds)) && numRounds != null);

// get playerChoice by button

const choices = document.querySelectorAll('button');
let playerChoice = "";

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        if (currentRound < numRounds) {
            currentRound++;
            playerChoice = choice.id;
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            let resultdiv = document.querySelector('#resultdiv');

            let roundmsg = document.createElement('div');
            roundmsg.textContent = "Round: " + currentRound;
            resultdiv.appendChild(roundmsg);

            let resultmsg = document.createElement('div');
            resultmsg.textContent = "You chose " + playerChoice;
            resultdiv.appendChild(resultmsg);

            let resultmsg2 = document.createElement('div');
            resultmsg2.textContent = "Computer chose " + computerChoice;
            resultdiv.appendChild(resultmsg2);

            let resultmsg3 = document.createElement('div');
            resultmsg3.textContent = result;
            resultdiv.appendChild(resultmsg3);

            let scoremsg = document.createElement('div');
            scoremsg.textContent = "Current Score (You:Computer) = " + playerWinCount + ":" + computerWinCount;
            resultdiv.appendChild(scoremsg)
            resultdiv.appendChild(document.createElement('br'));

            let finalResult = document.createElement('div');
            if (currentRound == numRounds) {
                if (playerWinCount > computerWinCount) {
                    finalResult.textContent = "After " + numRounds + " rounds, YOU WON!!!";
                } else if (playerWinCount < computerWinCount) {
                    finalResult.textContent = "After " + numRounds + " rounds, YOU LOST!!!"
                } else {
                    finalResult.textContent = "After " + numRounds + " rounds, YOU TIED!!!"
                }
            }
            resultdiv.appendChild(finalResult);
        } else {
            let noMoreMsg = document.createElement('div');
            noMoreMsg.textContent = "You already played " + numRounds + " rounds of game. Please refresh the page to start over."
            let resultdiv = document.querySelector('#resultdiv');
            resultdiv.appendChild(noMoreMsg);
        }
    })
});



function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return "rock";
    } else if (randInt === 1) {
        return "paper";
    } else if (randInt === 2) {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "canceled") {
        return "You canceled";
    } else if (playerSelection === "invalid") {
        return "You chose an invalid option. Please type R for rock, P for paper, or S for scissors.";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWinCount++;
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWinCount++;
        return "You win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWinCount++;
        return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWinCount++;
        return "You lose! Scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWinCount++;
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWinCount++;
        return "You win! Scissors beats paper";
    }
}



function game(numRounds) {
    for (i = 1; i <= numRounds; i++) {
        console.log("Round " + i);
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        currentRound++;
    }
}

// game(numRounds);