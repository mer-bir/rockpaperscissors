function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * choices.length);

    return choices[choice];
};

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    
    if (player === computer) {
        return 'Tie!';
    } else if (player === 'rock' && computer !== 'paper') {
        return 'You Win! Rock beats Scissors';
    } else if (player === 'paper' && computer !== 'scissors') {
        return 'You Win! Paper beats Rock';
    } else if (player === 'scissors' && computer !== 'rock') {
        return 'You Win! Scissors beat Paper';
    } else if (player === 'rock' && computer === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'You Lose! Scissors beat Paper';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'You Lose! Rock beats Scissors';
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelects = prompt();
        const computerSelects = getComputerChoice();
        console.log(playRound(playerSelects, computerSelects));
    }
};

game();



