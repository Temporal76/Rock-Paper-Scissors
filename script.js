function getComputerChoice () {
  let computerChoice = Math.floor(Math.random() * 3);


switch(computerChoice) {
  case 0:
    console.log("rock");
    break;
  case 1:
    console.log("paper");
    break;
  case 2:
    console.log("scissors");
    break;
  default:
    text = "wrong choice";
}
}


getComputerChoice();


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors?")


  }

  playRound()
   



