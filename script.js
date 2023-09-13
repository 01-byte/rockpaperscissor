

 const playerPrompt = prompt("please choose Rock paper or Scissor :");
 const playerSelection = playerPrompt.toUpperCase();
 const computerSelection = getComputerChoice();

 function getComputerChoice(){
    const choice = ['ROCK' , 'PAPER ', 'SCISSOR'];
    
    const computerChoice = Math.floor(Math.random()* choice.length );
    return randomChoice = choice[computerChoice];

}


function playRound(playerSelection,computerSelection ) {


    if (playerSelection  === computerSelection) {
        console.log("it's a draw");
    } 
    

//paper beats rock
   else if (playerSelection === "PAPER" && computerSelection === "ROCK" ) {
        console.log("You Win Paper beats Rock!");
    }

//paper lose to scissor 

    else if (playerSelection === "PAPER" && computerSelection === "SCISSOR" ) {
        console.log("You LOSE Paper Lose to Scissor");
    }

//rock win scissor
else if (playerSelection === "ROCK" && computerSelection === "SCISSOR" ) {
    console.log("You Win ROCK beats SCISSOR!");
}

//rock lose paper
else if (playerSelection === "ROCK" && computerSelection === "PAPER" ) {
    console.log("You LOSE Rock Lose to Paper");
}


//scissor win paper
else if (playerSelection === "SCISSOR" && computerSelection === "PAPER" ) {
    console.log("You Win SCISSOR beats PAPER!");
}
//scissor lose rock
else if (playerSelection === "SCISSOR" && computerSelection === "ROCK" ) {
    console.log("You LOSE SCISSOR Lose to ROCK");
}



}

playRound(playerSelection, computerSelection);