const CHOICES = ["rock", "paper", "scissors"];
const [rockBtn, paperBtn, scissorsBtn] = [... document.querySelectorAll("button.picker")];
const startRoundBtn =  document.querySelector("button.starter")
const [playerDisplay, compDisplay] = document.querySelectorAll("div.display");
let playerPick, comPick;
let score = [0,0];
let round = 0;
let maxRounds = 5;

rockBtn.addEventListener("click", (e) => updatePlayerPick(e, "rock"));
paperBtn.addEventListener("click", (e) => updatePlayerPick(e, "paper"));
scissorsBtn.addEventListener("click", (e) => updatePlayerPick(e, "scissors"));
startRoundBtn.addEventListener("click", (e) => startRound(e));

// Add start screen with play and how many rounds

function updatePlayerPick(e, pick){
    playerPick = pick;
    // Update player pick img html.
}

function updateComPick(){
    comPick = getComputerChoice();
    // Update com pick img html.
}

function startRound(){
    updateComPick();
    playOneRound(playerPick, comPick);
}

function playOneRound(playerChoice, computerChoice){
    console.log(`You picked ${playerChoice}`);
    console.log(`Computer picked ${computerChoice}`);
    // Animate closefist/rock transitio
    let roundResult = determineWinner(playerChoice, computerChoice);
    endRound(roundResult);
}

function endRound(roundResult){
    // Some confetti maybe
    updateScoreAndRound(roundResult);
    if(round === maxRounds) endGame();
}

function endGame(){
    // Announce winner / Add winner screen
    // Some confetti maybe
    // Go back to start screen
    // Reset game state
}

function updateScoreAndRound(roundResult){
    console.log(roundResult);
    round++;
    if(roundResult.includes("Win")) score[0]++;
    if(roundResult.includes("Lost")) score[1]++;
    console.log(`Round ${round} over. Score is ${score[0]}-${score[1]}`);
    // Update scoreboard and round html.
}


function getComputerChoice(){
    let computerChoice = CHOICES[Math.floor(Math.random() * 3)];
    return computerChoice;
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

function logWinner(playerScore, computerScore){
    if(playerScore > computerScore){
        console.log("Player wins!");
    } else if (computerScore < playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a draw!");
    }
}



