const CHOICES = ["rock", "paper", "scissors"];
const [rp1, rp2] = [...document.querySelectorAll("#round-picker button")];
const roundsPicked = document.querySelector("#round-picker span");
const startGameBtn = document.querySelector("#pre-game #start-game-btn");
const controlsCon = document.querySelector(".controls-con");
const displaysCon = document.querySelector(".displays-con");
const [rockBtn, paperBtn, scissorsBtn] = [... controlsCon.querySelectorAll("button.picker")];
const startRoundBtn =  document.querySelector("button.starter")
const [playerDisplay, compDisplay] = displaysCon.querySelectorAll("div.display");
let playerPick, comPick;
let score = [0,0];
let round = 0;
let maxRounds = 5;

rockBtn.addEventListener("click", (e) => updatePlayerPick(e, "rock"));
paperBtn.addEventListener("click", (e) => updatePlayerPick(e, "paper"));
scissorsBtn.addEventListener("click", (e) => updatePlayerPick(e, "scissors"));
startRoundBtn.addEventListener("click", (e) => startRound(e));
rp1.addEventListener("click", addRound);
rp2.addEventListener("click", reduceRound);
startGameBtn.addEventListener("click", startGame);



function addRound(){
    if(maxRounds < 10) maxRounds++;
    roundsPicked.textContent = maxRounds;
}

function reduceRound(){
    if(maxRounds > 1 )maxRounds--;
    roundsPicked.textContent = maxRounds;
}

function startGame(){
    score = [0,0];
    round = 0;
    let preGameScreen = document.querySelector("#pre-game");
    let mainScreen = document.querySelector("main");
    preGameScreen.classList.add("no-display");
    mainScreen.classList.remove("no-display");
}

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
    // Animate closefist/rock transition to picks
    let winner = determineWinner(playerChoice, computerChoice);
    endRound(winner);
}

function endRound(winner){
    // Some confetti maybe
    updateScoreAndRound(winner);
    if(round === maxRounds) endGame();
}

function endGame(){
    // Announce winner / Add winner screen
    
    // Some confetti maybe
    // Go back to start screen
    // Reset game state
}

function updateScoreAndRound(winner){
    if(winner === "player") score[0]++;
    if(winner === "com") score[1]++;
    // Update scoreboard and round html.
}


function getComputerChoice(){
    let computerChoice = CHOICES[Math.floor(Math.random() * 3)];
    return computerChoice;

}
function determineWinner(playerChoice, computerChoice){
    let winner;
    if(playerChoice == computerChoice) winner = null;
    else if(playerChoice == "rock" && computerChoice == "scissors") winner = "player";
    else if(playerChoice == "paper" && computerChoice == "rock") winner = "player";
    else if(playerChoice == "scissors" && computerChoice == "paper") winner = "player";
    else winner = "com";
    return winner;
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



