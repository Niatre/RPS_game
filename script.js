let playerSelection = prompt ('Do you choose rock, paper or scissors');


function computerPlay (){
    let computerSelection = Math.floor(Math.random()*3)
    if (computerSelection ==0 ){
    return 'Rock'
    } else if (computerSelection == 1){
    return 'Paper'
    } else {
    return 'Scissors'
    }
}







console.log('You chose ' + playerSelection)
console.log('The computer choose ' + computerPlay())
  