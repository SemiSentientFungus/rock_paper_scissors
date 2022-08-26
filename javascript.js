//varibles 
let playerScore = 0;
let computerScore = 0;

//gameplay
const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    game('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    game('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    game('scissors');
});
const div = document.querySelector('#results');

//functions

function computerSelect(){
    let num = Math.floor(Math.random()*3+1)
    if (num == 1){
        return "rock"
    }
    else if (num == 2){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function game(select){
    
    let computer = computerSelect();
    if (select == 'rock'){
        if (computer == 'rock'){
            div.textContent = "Draw!";
        }
        else if (computer == 'paper'){
            computerScore++;
            div.textContent = `You lose :c, the computer's score is: ${computerScore}`;
        }
        else {
            playerScore++;
            div.textContent = `You win! your score is: ${playerScore}`;
        }
    }
    else if (select == 'paper'){
        if (computer == 'rock'){
            playerScore++;
            div.textContent = `You win! your score is: ${playerScore}`;
        }
        else if (computer == 'paper'){
            console.log("draw!");
            div.textContent = "Draw!";
        }
        else {
            computerScore++;
            div.textContent = `You lose :c, the computer's score is: ${computerScore}`;
        }
    }
    else{
        if (computer == 'rock'){
            computerScore++;
            div.textContent = `You lose :c, the computer's score is: ${computerScore}`;
        }
        else if (computer == 'paper'){
            playerScore++;
            div.textContent = `You win!, your score is: ${playerScore}`;
        }
        else {
            div.textContent = "Draw!";
        }
    }
}