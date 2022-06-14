//code for the actual game
let playerSelection = prompt('Rock! Paper! Scissors!');
let computerSelection = computerPlay();
game(playerSelection, computerSelection);


//functions
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    switch(randomNumber){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"    
            break;
    }
}

function game(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == "rock"){
        if (computerSelection == "Rock"){
            console.log("Draw!");
        }
        else if (computerSelection == "Paper"){
            console.log("You lose! Paper beats rock!");
        }
        else {
            console.log("You win! Rock beats scissors!");
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "Rock"){
            console.log("You win! Paper beats rock!");
        }
        else if (computerSelection == "Paper"){
            console.log("Draw!");
        }
        else {
            console.log("You lose! Scissors beat paper!");
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "Rock"){
            console.log("You lose! Rock beats scissors!");
        }
        else if (computerSelection == "Paper"){
            console.log("You win! Scissors beat paper!");
        }
        else {
            console.log("Draw!");
        }
    }
    else {
        console.log("Ummm, are you sure you logged the right option?");
    }
}
