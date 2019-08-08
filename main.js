var choices = document.querySelectorAll(".choice");
var score = document.getElementById('score');
var result = document.getElementById('result');
var restart = document.getElementById('restart');
var modal = document.querySelector(".modal");
var scoreBoard = {
    player: 0,
    computer: 0
}

// Play Game

function play(e) {
    restart.style.display = "inline-block";
    var playerChoice = e.target.id;
    var computerChoice = getComputerChoice();
    var winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, playerChoice, computerChoice);
}

// Computer Choice
function getComputerChoice() {
    var rand = Math.random();
    if (rand < 0.34) {
        return "rock";
    } else if (rand < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get Winner
function getWinner(p, c) {
    if (p === c) {
        return "draw";
    } else if (p === "rock") {
        if (c === "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "paper") {
        if (c == "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "scissors") {
        if (c === 'rock') {
            return "computer";
        } else {
            return "player";
        }
    }
}

function showWinner(winner, playerChoice, computerChoice) {
    if (winner === "player") {
        scoreBoard.player++;
        result.innerHTML = `
        <h1 class="text-win">You Win!</h1>
        <div class="view-result"><i class="fas fa-hand-${playerChoice} fa-10x player"></i>
        <p>You chose <strong>${playerChoice}</strong></div>
        <div class="view-result"><i class="fas fa-hand-${computerChoice} fa-10x computer"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p></div>
        `;
    } else if (winner === "computer") {
        scoreBoard.computer++;
        result.innerHTML = `
        <h1 class="text-lose">You Lose!</h1>
        <div class="view-result"><i class="fas fa-hand-${playerChoice} fa-10x player"></i>
        <p>You chose <strong>${playerChoice}</strong></div>
        <div class="view-result"><i class="fas fa-hand-${computerChoice} fa-10x computer"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p></div>
        `;
    } else {
        result.innerHTML = `
        <h1>Draw!</h1>
        <div class="view-result"><i class="fas fa-hand-${playerChoice} fa-10x player"></i>
        <p>You chose <strong>${playerChoice}</strong></div>
        <div class="view-result"><i class="fas fa-hand-${computerChoice} fa-10x computer"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p></div>
        `;
    }
    score.innerHTML = `
    <p id="player">Player: ${scoreBoard.player}</p>
    <p id="computer">Computer: ${scoreBoard.computer}</p>
    `
    modal.style.display = "block";
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

function restartGame() {
    score.innerHTML = `
    <p id="player">Player: 0</p>
    <p id="computer">Computer: 0</p>
    `;
    restart.style.display = "none";
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);