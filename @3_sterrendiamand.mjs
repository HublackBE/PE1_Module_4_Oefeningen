import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let height = parseFloat(await userInput.question('Geef een hoogte in: '));
let i;
if(height % 2 === 0){
    i = 4;
    console.log(' '.repeat((height - 1) / 2) + '**');
}else{
    i = 3;
    console.log(' '.repeat(height / 2) + '*');
}
let outline = true;
let out;

for(i; i < height; i += 2){
    out = ' '.repeat((height - i) / 2) + '*';
    if(outline){
        out += ' '.repeat(i - 2);
    }else{
        out += '*'.repeat(i - 2);
    }
    out += '*';
    console.log(out);
    // console.log(' '.repeat((height - i) / 2) + '*'.repeat(i));
}

// TODO optimize this part
if(height % 2 === 0){
    let out = '';
    out += ' '.repeat((height - i) / 2) + '*';
    if(outline){
        out += ' '.repeat(i - 2);
    }else{
        out += '*'.repeat(i - 2);
    }
    out += '*';
    console.log(out);
    // console.log(' '.repeat((height - i) / 2) + '*'.repeat(i));
}

for(i; i > 2; i -= 2){
    out = ' '.repeat((height - i) / 2) + '*';
    if(outline){
        out += ' '.repeat(i - 2);
    }else{
        out += '*'.repeat(i - 2);
    }
    out += '*';
    console.log(out);
    // console.log(' '.repeat((height - i) / 2) + '*'.repeat(i));
}
if(height % 2 === 0){
    console.log(' '.repeat((height - 1) / 2) + '**');
}else{
    console.log(' '.repeat(height / 2) + '*');
}


process.exit();