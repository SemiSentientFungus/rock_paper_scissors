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
div.setAttribute('style', 'white-space: pre;');

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
            div.textContent += "Draw!\r\n" ;
        }
        else if (computer == 'paper'){
            computerScore++;
            div.textContent += `You lose :c, the computer's score is: ${computerScore}\r\n`;
        }
        else {
            playerScore++;
            div.textContent += `You win! your score is: ${playerScore}\r\n`;
        }
    }
    else if (select == 'paper'){
        if (computer == 'rock'){
            playerScore++;
            div.textContent += `You win! your score is: ${playerScore}\r\n`;
        }
        else if (computer == 'paper'){
            div.textContent += "Draw!\r\n";
        }
        else {
            computerScore++;
            div.textContent += `You lose :c, the computer's score is: ${computerScore}\r\n`;
        }
    }
    else{
        if (computer == 'rock'){
            computerScore++;
            div.textContent += `You lose :c, the computer's score is: ${computerScore}\r\n`;
        }
        else if (computer == 'paper'){
            playerScore++;
            div.textContent += `You win!, your score is: ${playerScore}\r\n`;
        }
        else {
            div.textContent += "Draw!\r\n";
        }
    }
    if (playerScore == 5){
        div.textContent += "You have won!!! \r\n";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else if (computerScore ==5){
        div.textContent += "You have lost :c\r\n";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}