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

//functions

function computerSelect(){

}

function game(select){
    if (select == 'rock'){
        console.log('rock');
    }
    else if (select == 'paper'){
        console.log("paper")
    }
    else{
        console.log('scissors')
    }
}