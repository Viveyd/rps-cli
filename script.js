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
    let result = `You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`;
    if(playerChoice == computerChoice) result = "It's a draw!";
    else if(playerChoice == "rock" && computerChoice == "scissors") ;
    else if(playerChoice == "paper" && computerChoice == "rock") ;
    else if(playerChoice == "scissors" && computerChoice == "paper") ;
    else result = `You Lost! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`;
    return result;
}

function capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
}



