const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user_score');
const computerScoreDisplay = document.getElementById('computer_score');


let userScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function handleUserChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    resultDisplay.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}


rockButton.addEventListener('click', () => handleUserChoice('rock'));
paperButton.addEventListener('click', () => handleUserChoice('paper'));
scissorsButton.addEventListener('click', () => handleUserChoice('scissors'));


const resetbtn=document.getElementById("reset");
resetbtn.addEventListener("click",()=>{
    userScore=0;
    computerScore=0;
    resultDisplay.textContent="";
    userScoreDisplay.textContent=userScore;
    computerScoreDisplay.textContent=computerScore;
});
