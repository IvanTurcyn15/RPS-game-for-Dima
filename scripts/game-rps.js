const gameRpsBtns = document.querySelectorAll(".game-rps-option-btn")
const gameRpsResult = document.querySelector(".game-rps-result");
const computerChoiceBth = document.querySelector(".game-rps-pc-option");
const gameRpsScore = document.querySelector(".game-rps-score");

let userScore = 0;
let computerScore = 0;
let computerChoice = null;
let userChoice = null;

function gameRpsComputerChoice(){
    const allChoices = ["rock","scissors","paper"];
    computerChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
}

computerChoiceBth.addEventListener("click", gameRpsComputerChoice);

gameRpsBtns.forEach((el) => {
    el.addEventListener("click", () => {
        gameRpsResult.style.color = "rgba(0, 0, 0, 1)";
        userChoice = el.id;
        const gameRpsResultText = result(userChoice,computerChoice);
        gameRpsResult.textContent = gameRpsResultText;
        gameRpsScore.textContent = `Рахунок: Комп'ютер - ${computerScore}, Ви - ${userScore}`;
        computerChoice = null;
        userChoice = null;
    });
});


function result(userChoice,computerChoice){
    if(userChoice === computerChoice){
        return "Нічия!"
    }
    else if((userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")){
        userScore++;
        gameRpsResult.style.color = "green";
        return "Ви виграли раунд!";
    } 
    else{
        computerScore++;
        gameRpsResult.style.color = "red";
        return "Комп’ютер виграв раунд!";
    }
}

