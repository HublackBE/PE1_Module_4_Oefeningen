import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let start = parseFloat(await userInput.question('Start: '));
let end = parseFloat(await userInput.question('End: '));
let divisor1 = parseFloat(await userInput.question('Deler 1: '));
let divisor2 = parseFloat(await userInput.question('Deler 2: '));

for(let i = start; i <= end; i++){
    if(i % divisor1 === 0 && i % divisor2 === 0){
        console.log(i, 'is deelbaar door', divisor1, 'en', divisor2);
    }
}


process.exit();