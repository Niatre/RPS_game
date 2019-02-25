let computerScore = 0;
let playerScore = 0;
let round = 0;
let ties = 0;

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
    return ++ties , ++round
  } else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
    console.log("You Lose! " + computerSelection + " beats " + playerSelection)
    return ++computerScore , ++round
  } else {
    console.log("You Win! " + playerSelection + " beats " + computerSelection)
    return ++playerScore , ++round
  }
}

function game(){
  let score = 0;
 for(i = 0; i<6; i++){
  let playerSelection = promptPlayer()
            score += playRound(playerSelection, computerPlay())
}
console.log("The game has ended")
  if(ties == 0){
      console.log("It was a tie")
  } else if(computerScore < playerScore){
      console.log("You lost. Your score was: " + playerScore)
  } else {
      console.log("You won! Your score was: " + computerScore)
  }
}

const playerSelection = promptPlayer();
console.log('You chose ' + playerSelection);
const computerSelection = computerPlay();
console.log('The computer choose ' + computerSelection);
console.log(game());
