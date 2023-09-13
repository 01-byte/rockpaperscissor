
let win = 0;
let lose = 0;
let tie = 0;

for (i = 1 ; i < 5 ; i++){



 const playerPrompt = prompt("please choose Rock paper or Scissor :");
 const playerSelection = playerPrompt.toUpperCase();
 const computerSelection = getComputerChoice();

 function getComputerChoice(){
    const choice = ['ROCK' , 'PAPER ', 'SCISSOR'];
    
    const computerChoice = Math.floor(Math.random()* choice.length );
    return randomChoice = choice[computerChoice];

}


function playRound(playerSelection,computerSelection ) {
    console.log("the player chose " + playerSelection );
    console.log("the computer chose " + computerSelection);




    
    if (playerSelection  === computerSelection) {
        console.log("it's a draw");
        tie += 1;
    } 
    

//paper beats rock
   else if (playerSelection === "PAPER" && computerSelection === "ROCK" ) {
        console.log("You Win Paper beats Rock!");
        win += 1;
    }

//paper lose to scissor 

    else if (playerSelection === "PAPER" && computerSelection === "SCISSOR" ) {
        console.log("You LOSE Paper Lose to Scissor");
        lose +=1;
    }

//rock win scissor
else if (playerSelection === "ROCK" && computerSelection === "SCISSOR" ) {
    console.log("You Win ROCK beats SCISSOR!");
        win +=1;
}

//rock lose paper
else if (playerSelection === "ROCK" && computerSelection === "PAPER" ) {
    console.log("You LOSE Rock Lose to Paper");
    lose +=1;

}


//scissor win paper
else if (playerSelection === "SCISSOR" && computerSelection === "PAPER" ) {
    console.log("You Win SCISSOR beats PAPER!");
     win +=1;
}
//scissor lose rock
else if (playerSelection === "SCISSOR" && computerSelection === "ROCK" ) {
    console.log("You LOSE SCISSOR Lose to ROCK");
    lose +=1;
}
    
}



playRound(playerSelection, computerSelection);


}

console.log(`Final Result : W-${win} L- ${lose} Tie - ${tie}`);