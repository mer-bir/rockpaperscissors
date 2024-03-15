function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * choices.length);

    return choices[choice];
};

let playerScore = 0;
let cpuScore = 0;

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if (playerScore < 5 && cpuScore < 5) {
        if (player === computer) {
            return 'Tie!';
        } else if (player === 'rock' && computer !== 'paper') {
            playerScore++;
            return 'You Win! Rock beats Scissors';
        } else if (player === 'paper' && computer !== 'scissors') {
            playerScore++;
            return 'You Win! Paper beats Rock';
        } else if (player === 'scissors' && computer !== 'rock') {
            playerScore++;
            return 'You Win! Scissors beat Paper';
        } else if (player === 'rock' && computer === 'paper') {
            cpuScore++;
            return 'You Lose! Paper beats Rock';
        } else if (player === 'paper' && computer === 'scissors') {
            cpuScore++;
            return 'You Lose! Scissors beat Paper';
        } else if (player === 'scissors' && computer === 'rock') {
            cpuScore++;
            return 'You Lose! Rock beats Scissors';
        }
    } else if (playerScore == 5) {
        return 'You beat the computer!';
    } else if (cpuScore == 5) {
        return 'EZ for the computer!';
    }
};

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorsBtn.textContent = "scissors";

rockBtn.addEventListener('click', () => {
    division.textContent = playRound(playerSelection = 'rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    division.textContent = playRound(playerSelection = 'paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    division.textContent = playRound(playerSelection = 'scissors', getComputerChoice());
});


document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

let division = document.createElement('div');
document.body.appendChild(division);








/*function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelects = prompt();
        const computerSelects = getComputerChoice();
        console.log(playRound(playerSelects, computerSelects));
    }
};


game(); */



