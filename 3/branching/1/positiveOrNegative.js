const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt('Input a number: '))

let result;

if (input < 0){
    result = "Negative"
} else if (input > 0){
    result = "Positive"
} else {
    result = "Just Zero"
}

console.log(`Number ${input} is ${result}`)