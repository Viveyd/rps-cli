function getPlayerChoice(){
    const CHOICES = ["rock", "paper", "scissors"];
    let playerChoice;
    while(true){
        playerChoice = prompt("Type rock/paper/scissors");
        if(CHOICES.includes(playerChoice.trim().toLowerCase())) break;
    }
    return playerChoice;
}