//varibles 
let playerScore = 0;
let computerScore = 0;

//gameplay
const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    alertFunction('rock')
});

const paper = document.querySelector('#paper');
paper.onclick = alertFunction;

const scissors = document.querySelector('#scissors');
scissors.onclick = alertFunction;

//functions

function alertFunction(selector) {
    alert(selector);
}