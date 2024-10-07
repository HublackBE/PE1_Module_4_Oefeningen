import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let start = parseFloat(await userInput.question('Start: '));
let end = parseFloat(await userInput.question('End: '));
let divisor1 = parseFloat(await userInput.question('Deler 1: '));
let divisor2 = parseFloat(await userInput.question('Deler 2: '));
let dividable1 = false;
let dividable2 = false;

for(let i = start; i <= end; i++){
    dividable1 = i % divisor1 === 0;
    dividable2 = i % divisor2 === 0;
    if(dividable1 && dividable2){
        console.log(i, 'is deelbaar door', divisor1, 'en', divisor2);
    }else if(dividable1) {
        console.log(i, 'is niet deelbaar door', divisor2);
    }else if(dividable2){
        console.log(i, 'is niet deelbaar door', divisor1);
    }else{
        console.log(i, 'is noch deelbaar door', divisor1, 'noch door', divisor2);
    }
}


process.exit();