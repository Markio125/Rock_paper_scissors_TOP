console.log("Starting...");
function getComputerChoice () {
    let rand = Math.random();
    if (rand < 0.33) {
        return "rock";
    }
    else if (rand < 0.67) {
        return "paper";
    }
    else {
        return "scissor";
    }
}
function getHumanChoice () {
    let choice = prompt("Enter your choice: ");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissor") {
        return choice;
    }
    else {
        return "Invalid choice!";
    }
}
function determineWinner (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        }
        else {
            return "You win!";
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "scissor") {
            return "Computer wins!";
        }
        else {
            return "You win!";
        }
    }
    if (humanChoice === "scissor") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        }
        else {
            return "You win!";
        }
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer wins!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "scissor") {
            console.log("Computer wins!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }
    if (humanChoice === "scissor") {
        if (computerChoice === "rock") {
            console.log("Computer wins!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }
}
function playGame () {
    while (humanScore < 3 && computerScore < 3) {
        let humanChoice = getHumanChoice();
        if (humanChoice === "Invalid choice!") {
            console.log(humanChoice);
            continue;
        }
        let computerChoice = getComputerChoice();
        console.log(`You chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    let finalStatement = `Final score: You: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore > computerScore) {
        console.log(`You win! \n${finalStatement}`);
    }
    else {
        console.log(`Computer wins! \n${finalStatement}`);
    }
}
playGame();