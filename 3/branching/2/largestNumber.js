const prompt = require('prompt-sync')({sigint:true});

const num1 = Number(prompt('Enter the first number: '))
const num2 = Number(prompt('Enter the second number: '))

let result;

if (num1 > num2){
    result = num1
} else if (num1 < num2){
    result = num2
} else {
    console.log("Both numbers are equal")
}

if (num1 !== num2){
    console.log(`The largest number is: ${result}`)
}