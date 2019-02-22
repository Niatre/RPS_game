let playerSelection = prompt ('Do you choose rock, paper or scissors ? ');

function computerPlay (){
    let computerSelection = Math.floor(Math.random()*3);
    if (computerSelection == 0 ){
    return 'rock';
    } else if (computerSelection == 1){
    return 'paper';
    } else {
    return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
    return ("It's a tie!");
  } else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
    return ("You Lose! " + computerSelection + " beats " + playerSelection);
  } else {
    return ("You Win! " + playerSelection + " beats " + computerSelection);
  }
}



console.log('You chose ' + playerSelection);
const computerSelection = computerPlay();
console.log('The computer choose ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));
