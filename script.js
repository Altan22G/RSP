"use strict";

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const playAgain = document.querySelector(".play-btn");
const me = document.querySelector(".me");
const bot = document.querySelector(".bot");
const wlt = document.getElementById("w-l-t");
 
let youScore = 0;
let botScore = 0;

function updateScore() {
    me.textContent = youScore;
    bot.textContent = botScore;

    if (youScore === 10) {
        wlt.textContent = "You won the game🥳";
        disableButtons();
    } else if (botScore === 10) {
        wlt.textContent = "Bot won the game🎉";
        disableButtons();
    }
}

function playButtons() {
    rockBtn.addEventListener("click", rockFn);
    paperBtn.addEventListener("click", paperFn);
    scissorsBtn.addEventListener("click", scissorFn);
}

function disableButtons() {
    rockBtn.removeEventListener("click", rockFn);
    paperBtn.removeEventListener("click", paperFn);
    scissorsBtn.removeEventListener("click", scissorFn);
}

function playAgainFn() {
    wlt.textContent = "Play Again";
    me.textContent = 0;
    bot.textContent = 0;
    youScore = 0;
    botScore = 0;
    playButtons();
}

function rockFn() {
    let randomNum = Math.trunc(Math.random() * 3 + 1);
    if (randomNum === 1) { // rock
        wlt.textContent = "Rock vs Rock | Tie";
    } else if (randomNum === 2 && randomNum < 3) { // paper
        wlt.textContent = "Rock vs Paper | Bot wins";
        botScore += 1;
    } else if (randomNum === 3) { // scissor
        wlt.textContent = " Rock vs Scissor | You win";
        youScore += 1;
    }
    updateScore();
}

function paperFn() {
    let randomNum = Math.trunc(Math.random() * 3 + 1);
    if (randomNum === 1) { // rock
        wlt.textContent = "Paper vs Rock | You win";
        youScore += 1;
    } else if (randomNum === 2) { // paper
        wlt.textContent = "Paper vs Paper | Tie";
    } else if (randomNum === 3) { // scissor
        wlt.textContent = "Paper vs Scissor | Bot win";
        botScore += 1;
    }
    updateScore();
}

function scissorFn() {
    let randomNum = Math.trunc(Math.random() * 3 + 1);
    if (randomNum === 1) { // rock
        wlt.textContent = "Scissor vs Rock | Bot win";
        botScore += 1;
    } else if (randomNum === 2) { // paper
        wlt.textContent = "Scissor vs Paper | You win";
        youScore += 1;  
    } else if (randomNum === 3) { // scissor
        wlt.textContent = "Scissor vs Scissor | Tie";
    }
    updateScore();
}

playButtons();
playAgain.addEventListener("click", playAgainFn);