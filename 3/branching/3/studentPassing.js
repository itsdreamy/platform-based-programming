const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt("Enter student's score: "))
const attendance = Number(prompt("Enter student's attendance score: "))

let result;

if (input >= 60 && input <= 100 && attendance >= 75 && attendance <= 100){
    result = "Passed"
} else {
    result = "Failed"
}

console.log(`Student with score ${input} and attendance ${attendance} is ${result}`)