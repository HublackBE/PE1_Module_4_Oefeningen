import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
let userChoice = await userInput.question('Kies uit rock, paper en scissors: ');
let win = new Map([
    ['rock', 'scissors'],
    ['paper', 'rock'],
    ['scissors', 'paper']
]);

if(userChoice === win.get(computerChoice)){
    console.log('Sorry, je bent verloren. De computer had', computerChoice);
}else if(userChoice === computerChoice){
    console.log('Gelijke stand! De computer had ook', userChoice);
}else{
    console.log('Je bent gewonnen! De computer had', computerChoice);
}


process.exit();