function computerPlay() {
  const choiceList = ["rock", "paper", "scissors"]
  return choiceList[Math.floor(Math.random() * choiceList.length)];
}

function oneRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  switch (playerSelection) {
    case "rock":
      if (computerSelection === 'rock') {
        return ["draw", "It's a draw! You both chose rock!", computerSelection];
      } else if (computerSelection === 'scissors') {
        return ["win", "You win! Rock beats scissors!", computerSelection];
      } else if (computerSelection === 'paper') {
        return ["lose", "You lose! Paper beats rock!", computerSelection]
      }
      break;
    case "paper":
      if (computerSelection === 'paper') {
        return ["draw", "It's a draw! You both chose paper!", computerSelection];
      } else if (computerSelection === 'rock') {
        return ["win", "You win! Paper beats rock!", computerSelection];
      } else if (computerSelection === 'scissor') {
        return ["lose", "You lose! Scissors beats paper!", computerSelection]
      }
      break;
    case "scissors":
      if (computerSelection === 'scissors') {
        return ["draw", "It's a draw! You both chose scissors!", computerSelection];
      } else if (computerSelection === 'paper') {
        return ["win", "You win! Scissors beats paper!", computerSelection];
      } else if (computerSelection === 'rock') {
        return ["lose", "You lose! Rock beats scissors!", computerSelection]
      }
      break;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt("Enter rock, paper or scissors: ")
    let roundResult = oneRound(playerSelection, computerPlay());

    if (roundResult[0] === "win") {
      playerScore += 1;
    } else if (roundResult[0] === "lose") {
      computerScore += 1;
    } else {
      playerScore = playerScore;
      computerScore = computerScore;
    }

    console.log(`Player Score: ${playerScore}`, `Computer Score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("YAY! YOU WIN!")
  } else if (playerScore < computerScore) {
    console.log("Unlucky, you lose :(")
  } else {
    console.log("It's a draw!")
  }
}
