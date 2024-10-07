import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let startTop = true;
let startLeft = false;
let height = parseFloat(await userInput.question('Hoogte: '));

for(let i = 1; Math.abs(i) <= height; i++){
    let stars = i;  // amount of stars to be shown
    let out = '';
    if(!startTop){
        stars = -(height - i) - 1;  // inverts the amount of stars (example 1 --> 5)
    }
    if(!startLeft){
        out += ' '.repeat(height - Math.abs(stars));    // adds space in front of stars
    }
    out += '*'.repeat(Math.abs(stars));
    console.log(out);
}


process.exit();