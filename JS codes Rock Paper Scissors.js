let userInput = 'bomb'
userInput = userInput.toLowerCase();

function getComputerChoice() {
      let randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
      }
    }
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won!';
    }
    else {
      return 'You win!';
    }
  }
    if (userChoice === 'paper'){
    if (computerChoice === 'rock'){
      return 'Computer won!';
    }
    else {
      return 'Computer Won!';
    }
  }
    if (userChoice === 'scissors'){
    if (computerChoice === 'paper'){
      return 'You won!';
    }
    else {
      return 'Computer Won!';
    }
  }
   if (userChoice === 'bomb'){
    if (computerChoice === 'paper'){
      return 'You win!';
    }
    else {
      return 'You win!';
    }
  }

}
function playGame(){
  let userChoice = userInput;
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
