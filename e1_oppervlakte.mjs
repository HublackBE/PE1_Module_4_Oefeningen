import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let side1 = parseFloat(await userInput.question('Zijde 1: '));
let side2 = parseFloat(await userInput.question('Zijde 2: '));
let surface = side1 * side2;

console.log('Een rechthoek met afmetingen', side1, 'en', side2, 'heeft als oppervlakte', surface);


process.exit();