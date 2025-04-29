let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (computerSelection === wins[playerSelection]) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "🎉 You win the game!" : "😞 Computer wins the game!";
    resultsDiv.innerHTML += `<p><strong>${winner}</strong></p>`;
    disableButtons();
  }
}

function handleClick(playerChoice) {
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  resultsDiv.innerHTML = `
    <p>${result}</p>
    <p>Player: ${playerScore} | Computer: ${computerScore}</p>
  `;
  checkWinner();
}

function disableButtons() {
  document.querySelectorAll("button").forEach(button => button.disabled = true);
}

// Add event listeners
document.getElementById("rock").addEventListener("click", () => handleClick("rock"));
document.getElementById("paper").addEventListener("click", () => handleClick("paper"));
document.getElementById("scissors").addEventListener("click", () => handleClick("scissors"));
