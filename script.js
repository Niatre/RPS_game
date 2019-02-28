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
  if(playerSelection === computerSelection){
    console.log("It's a tie!");
    return 0
  } else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
    console.log("You Lose! " + computerSelection + " beats " + playerSelection)
    return -1
  } else {
    console.log("You Win! " + playerSelection + " beats " + computerSelection)
    return 1
  }
}

function game(){
  let score = 0;
 for(i = 0; i<5; i++){
  let playerSelection = promptPlayer()
             score += playRound(playerSelection, computerPlay())
}
   if(score < 0){
      console.log("You lost. Your score was: " + score)
  } else {
      console.log("You won! Your score was: " + score)
  }
  return 'The Game has ended'
}

const playerSelection = promptPlayer();
const computerSelection = computerPlay();
console.log(game());