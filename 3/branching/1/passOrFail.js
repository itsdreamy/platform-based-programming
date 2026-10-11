const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt("Input the student's score: "))

let result;

if (input >= 60){
    result = "Pass"
} else {
    result = "Fail"
}

console.log(`Student's score: ${input}, Result: ${result}`)