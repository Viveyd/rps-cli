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


