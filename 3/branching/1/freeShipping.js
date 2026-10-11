const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt("Enter your total purchase amount: "))

let result;

if (input >= 100000){
    result = "Free shipping"
} else {
    result = "Shipping Fee Applies"
}

console.log(`Your purchase amount: ${input}, Result: ${result}`)