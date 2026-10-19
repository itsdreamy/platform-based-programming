const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt("Input your age: "))

let result;

if (input >= 17){
    result = "Eligible for an ID card"
} else {
    result = "Not eligible for an ID card"
}

console.log(`Your age: ${input}, Result: ${result}`)