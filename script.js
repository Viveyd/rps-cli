const CHOICES = ["rock", "paper", "scissors"];
const [rockBtn, paperBtn, scissorsBtn] = [... document.querySelectorAll("button")];
const [playerDisplay, compDisplay] = document.querySelectorAll("div.display");
let playerPick, comPick;
let picked = false;

rockBtn.addEventListener("click", (e) => updatePlayerPick(e, "rock"))
paperBtn.addEventListener("click", (e) => updatePlayerPick(e, "paper"))
scissorsBtn.addEventListener("click", (e) => updatePlayerPick(e, "scissors"))

function updatePlayerPick(e, pick){
    if(picked == true) return;
    playerPick = pick;
    picked = true;
    updateComPick();
    playOneRound(playerPick, comPick);
}

function updateComPick(){
    comPick = getComputerChoice();
}

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
    console.log(`You picked ${playerChoice}`);
    console.log(`Computer picked ${computerChoice}`);
    let roundResult = determineWinner(playerChoice, computerChoice);
    console.log(roundResult);
}

function determineWinner(playerChoice, computerChoice){
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

function game(rounds = 5){
    let counter = 1;
    let playerScore = 0;
    let computerScore = 0;
    while(counter <= rounds){
        console.log(`Round ${counter}`)
        let result = playOneRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        if(result.includes("Win")) playerScore++;
        else if(result.includes("Lost")) computerScore++;
        console.log(`Score: ${playerScore}-${computerScore}`);
        counter++;
    }
    logWinner(playerScore, computerScore);
}

function logWinner(playerScore, computerScore){
    if(playerScore > computerScore){
        console.log("Player wins!");
    } else if (computerScore < playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a draw!");
    }
}



