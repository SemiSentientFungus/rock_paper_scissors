//varibles 
let computerScore = 0;
let playerScore = 0;

//code for the actual game
game();

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock"){
        if (computerSelection == "Rock"){
            return("Draw!");
        }
        else if (computerSelection == "Paper"){
            return("You lose! Paper beats rock!");
            computerScore++;
        }
        else {
            return("You win! Rock beats scissors!");
            playerScore++;
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "Rock"){
            return("You win! Paper beats rock!");
            playerScore++;
        }
        else if (computerSelection == "Paper"){
            return("Draw!");
        }
        else {
            return("You lose! Scissors beat paper!");
            computerScore++;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "Rock"){
            return("You lose! Rock beats scissors!");
            computerScore++;
        }
        else if (computerSelection == "Paper"){
            return("You win! Scissors beat paper!");
            playerScore++;
        }
        else {
            return("Draw!");
        }
    }
    else {
        return("Ummm, are you sure you logged the right option?");
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        //code to repeate the game
        let playerSelection = prompt('Rock! Paper! Scissors!');
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        playRound(playerSelection, computerSelection);
        if (playerScore == 3){
            console.log("You won!");
            break;
        }
        else if (computerScore == 3){
            console.log("You lost :<");
            break;
        }

    }
}