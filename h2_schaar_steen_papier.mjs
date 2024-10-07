import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let scoreAI = 0;
let scoreUser = 0;

let choices = ['rock', 'paper', 'scissors'];

let computerChoice;
let userChoice;

// Key wins against value
let win = new Map([
    ['rock', 'scissors'],
    ['paper', 'rock'],
    ['scissors', 'paper']
]);

while(scoreUser < 3 && scoreAI < 3){
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    userChoice = (await userInput.question('\nKies uit rock, paper en scissors: ')).toLowerCase();

    if(!choices.includes(userChoice)){
        console.log('\nFoute input.');
    }
    else if(userChoice === win.get(computerChoice)){
        console.log('\nSorry, je bent verloren. De computer had', computerChoice);
        scoreAI++;
    }
    else if(userChoice === computerChoice){
        console.log('\nGelijke stand! De computer had ook', userChoice);
    }
    else{
        console.log('\nJe bent gewonnen! De computer had', computerChoice);
        scoreUser++;
    }

    console.log('\n\nUser:', scoreUser, '|', 'Computer:', scoreAI);
}

if(scoreUser >= 3){
    console.log('\nJe bent het spel gewonnen!')
}else{
    console.log('\nSorry, je bent het spel verloren.')
}


process.exit();