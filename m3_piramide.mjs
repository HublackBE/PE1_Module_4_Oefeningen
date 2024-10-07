import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let startTop = false;
let startLeft = false;
let height = parseFloat(await userInput.question('Hoogte: '));

for(let i = 1; Math.abs(i) <= height; i++){
    let amount = i;  // amount to be shown
    let out = '';
    if(!startTop){
        amount = -(height - i) - 1;  // inverts the amount to be shown (example 1 --> 5)
    }
    if(!startLeft){
        out += ' '.repeat(height - Math.abs(amount));    // adds space in front
    }
    let numString = Math.abs(amount).toString();
    out += numString.repeat(Math.abs(amount));
    console.log(out);
}


process.exit();