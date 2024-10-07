import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let number = parseFloat(await userInput.question('Geef een nummer in: '));

for(let i = 1; i <= number; i++){
    let out = i.toString();
    console.log(out.repeat(i));
}


process.exit();