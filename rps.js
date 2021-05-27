
console.log('Hello World!');

//Declaring Variables
let playerInput;
let playerSelection;
let attempt;
let wins = 0;
let losses = 0;
let draws = 0;

//Game code

for(let i=0; i < 5; i++){
    do{
        playerInput = prompt('Select one of the valid Options', '"Rock", "Paper" or "Scissors"' );
        playerSelection = playerInput.toLowerCase();
    }
    while(!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'));
    
    
    attempt = playRound(playerSelection, computerPlay());
    console.log(attempt);
    
    if(attempt.search('Win') > 0){
    wins++;
    }
    else if(attempt.search('Lose') > 0){
    losses++;
    }
    else if(attempt.search('Tie') > 0){
    draws++;
    }
}

console.log('You won '+wins+' times and you lost '+losses+' times and you had '+draws+' draws');


//Declaring functions

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':{ 
            switch(computerSelection){
                case 'rock': return 'It is a Tie! Try again';
                break;
                case 'paper': return 'You Lose! Paper beats Rock';
                break;
                case 'scissors': return 'You Win! Rock beats Scissors';
                break;
            }
        break;
        }
        case 'paper':{
            switch(computerSelection){
                case 'rock': return 'You Win! Paper beats Rock';
                break;
                case 'paper': return 'It is a Tie! Try again';
                break;
                case 'scissors': return 'You Lose! Scissors beats Paper';
                break;
            }
        break;    
        }
        case 'scissors':{
            switch(computerSelection){
                case 'rock': return 'You Lose! Rock beats Scissors';
                break;
                case 'paper': return 'You Win! Scissor cut Paper';
                break;
                case 'scissors': return 'It is a Tie! Try again';
                break;
            }
        break;    
        }
        
    }
}




function getRanNum(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

//Get either Rock, Paper or Scissors
function computerPlay(){
    let dearler = getRanNum(1,4);
    switch(dearler){
        case 1: 
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3: 
            return 'scissors';
            break;
    }
}