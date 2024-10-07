import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let height = parseFloat(await userInput.question('Height: '));
let width = parseFloat(await userInput.question('Width: '));

console.log('*'.repeat(width));
for(let i = 1; i <= height-2; i++){
    console.log('*' + ' '.repeat(width-2) + '*');
}
console.log('*'.repeat(width));


process.exit();