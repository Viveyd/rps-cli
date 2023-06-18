const CHOICES = ["rock", "paper", "scissors"];

function getPlayerChoice(){
    let playerChoice;
    while(true){
        playerChoice = prompt("Type rock/paper/scissors");
        if(CHOICES.includes(playerChoice.trim().toLowerCase())) break;
    }
    return playerChoice;
}

function getComputerChoice(){
    let computerChoice = CHOICES[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playOneRound(playerChoice, computerChoice){
    let result;
    if(playerChoice == computerChoice) result = "It's a draw!"
    else if(playerChoice == "rock" && computerChoice == "scissors") result = "Player wins!";
    else if(playerChoice == "paper" && computerChoice == "rock") result = "Player wins!";
    else if(playerChoice == "scissors" && computerChoice == "paper") result = "Player wins!";
    else result = "Computer wins!";
    return result;
}

function capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
}



