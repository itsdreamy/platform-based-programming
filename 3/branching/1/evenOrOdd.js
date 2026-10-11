const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt('Input a number: '))

let result;

if (input % 2 === 0){
    result = "Even"
} else {
    result = "Odd"
}

console.log(`Number ${input} is ${result}`)