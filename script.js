const CHOICES = ["rock", "paper", "scissors"];
const [rp1, rp2] = [...document.querySelectorAll("#round-picker button")];
const roundsPicked = document.querySelector("#round-picker span");
const startGameBtn = document.querySelector("#pre-game #start-game-btn");
const controlsCon = document.querySelector(".controls-con");
const displaysCon = document.querySelector(".displays-con");
const [rockBtn, paperBtn, scissorsBtn] = [... controlsCon.querySelectorAll("button.picker")];
const [playerDisplay, compDisplay] = displaysCon.querySelectorAll("div.display");
let playerPick, comPick;
let score = [0,0];
let round = 1;
let maxRounds = 5;

rockBtn.addEventListener("click", (e) => playRound(e, "rock"));
paperBtn.addEventListener("click", (e) => playRound(e, "paper"));
scissorsBtn.addEventListener("click", (e) => playRound(e, "scissors"));
rp1.addEventListener("click", addRound);
rp2.addEventListener("click", reduceRound);
startGameBtn.addEventListener("click", startGame);
document.querySelector(".end-screen button").addEventListener("click", goToPregame);

function goToPregame(){
    document.querySelector("main").classList.add("no-display");
    document.querySelector(".end-screen").classList.add("no-display");
    document.querySelector("#pre-game").classList.remove("no-display");
}

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
    round = 1;
    let preGameScreen = document.querySelector("#pre-game");
    let mainScreen = document.querySelector("main");
    preGameScreen.classList.add("no-display");
    mainScreen.classList.remove("no-display");
    startNewRound();
    updateScoresHTML();
}

function updatePlayerPick(pick){
    playerPick = pick;
    const ASSOCIATIVE = {"rock":[rockBtn, "./images/rock.png"], "paper":[paperBtn, "./images/paper.png"], "scissors":[scissorsBtn, "./images/scissors.png"]};
    const btnsToHide = ["rock", "paper", "scissors"].filter(x => x !== pick).map(x => ASSOCIATIVE[x][0]);
    disableAllPickBtns();
    hideBtns(btnsToHide);
    updateImgSrcOf(ASSOCIATIVE[pick][1], playerDisplay.querySelector("div > img"));
}

function disableAllPickBtns(){
    [rockBtn, paperBtn, scissorsBtn].forEach(btn => btn.disabled = true);
}

function enableAllPickBtns(){
    [rockBtn, paperBtn, scissorsBtn].forEach(btn => btn.disabled = false);
}

function hideBtns(btns){
    btns.forEach(btn => btn.classList.add("no-display"));
}

function showAllBtns(){
    [rockBtn, paperBtn, scissorsBtn].forEach(btn => btn.classList.remove("no-display"));
}
function updateImgSrcOf(imgSrc, el){
    if(imgSrc === "") el.classList.add("no-display");
    else {
        el.classList.remove("no-display");
        el.src = imgSrc;
    }
}

function updateComPick(){
    comPick = getComputerChoice();
    const ASSOCIATIVE = {"rock": "./images/rock.png", "paper":"./images/paper.png", "scissors":"./images/scissors.png"};
    updateImgSrcOf(ASSOCIATIVE[comPick], compDisplay.querySelector("div > img"));
}

function startNewRound(){
    updateRoundHTML();
    // Pick displays are empty
    updateImgSrcOf("", playerDisplay.querySelector("div > img"));
    updateImgSrcOf("", compDisplay.querySelector("div > img"));
    // All pick buttons are shown and enabled
    showAllBtns();
    enableAllPickBtns();
    
    // In the future, pick displays should cycle through rps while waiting for pick
}

function updateRoundHTML(){
    document.querySelector(".gameboard .cur-round").textContent = round;
}

function updateScoresHTML(){
    document.querySelector(".gameboard .player-score").textContent = score[0];
    document.querySelector(".gameboard .com-score").textContent = score[1];
}

function playRound(e, pick){
    updatePlayerPick(pick);
    updateComPick();
    // Animate closefist/rock transition to picks
    let winner = determineWinner();
    endRound(winner);
}

function endRound(winner){
    // Some confetti maybe
    updateScoreAndRound(winner);
    // Round and scores displays are correct
    updateScoresHTML();
    if(round === maxRounds+1) endGame(winner);
    else setTimeout(() =>startNewRound(),1500);
    
}

function endGame(winner){
    // Announce winner / Add winner screen
    disableAllPickBtns();
    showEndScreen(winner);
    // Some confetti maybe
    // Go back to start screen
    // Reset game state
}

function updateScoreAndRound(winner){
    round++;
    if(winner === "player") score[0]++;
    if(winner === "com") score[1]++;
    // Update scoreboard and round html.
}

function showEndScreen(winner){
    const endMsg = winner === "player" ? "You Win!": winner === "com" ? "You Lost!": "Draw!";
    document.querySelector(".end-screen h1").textContent = endMsg; 
    document.querySelector(".end-screen").classList.remove("no-display");
}


function getComputerChoice(){
    let computerChoice = CHOICES[Math.floor(Math.random() * 3)];
    return computerChoice;

}
function determineWinner(){
    let winner;
    if(playerPick == comPick) winner = null;
    else if(playerPick == "rock" && comPick == "scissors") winner = "player";
    else if(playerPick == "paper" && comPick == "rock") winner = "player";
    else if(playerPick == "scissors" && comPick == "paper") winner = "player";
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



