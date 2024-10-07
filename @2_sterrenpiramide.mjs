import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let startTop = false;
let startLeft = true;
let outline = true;
let height = parseFloat(await userInput.question('Hoogte: '));
let out = '';

if(startTop){
    if(!startLeft){
        out += ' '.repeat(height-1);
    }
    out += '*';
    console.log(out);
}else{
    console.log('*'.repeat(height));
}
for(let i = 2; Math.abs(i) < height; i++){
    let stars = i;  // amount of stars to be shown
    let out = '';
    if(!startTop){
        stars = -(height - i) - 1;  // inverts the amount of stars (example 1 --> 5)
    }
    if(!startLeft){
        out += ' '.repeat(height - Math.abs(stars));    // adds space in front of stars
    }
    if(outline){
        out += '*' + ' '.repeat(Math.abs(stars)-2);
    }else{
        out += '*'.repeat(Math.abs(stars)-1)
    }
    out += '*'
    console.log(out);
}
if(!startTop){
    if(!startLeft){
        out += ' '.repeat(height-1);
    }
    out += '*';
    console.log(out);
}else{
    console.log('*'.repeat(height));
}


process.exit();