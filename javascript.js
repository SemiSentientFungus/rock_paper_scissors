//varibles 
let playerScore = 0;
let computerScore = 0;

//gameplay
const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    alertFunction('rock')
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    alertFunction('paper')
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    alertFunction('scissors')
});

//functions

function alertFunction(selector) {
    alert(selector);
}