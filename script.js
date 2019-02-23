function promptPlayer(){
 return prompt("Do you choose rock, paper or scissors ? ")
}

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
    console.log("It's a tie!");
    return 
  } else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
    console.log("You Lose! " + computerSelection + " beats " + playerSelection)
    return 
  } else {
    console.log("You Win! " + playerSelection + " beats " + computerSelection)
    return 
  }
}



const playerSelection = promptPlayer();
console.log('You chose ' + playerSelection);
const computerSelection = computerPlay();
console.log('The computer choose ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));
