const prompt = require('prompt-sync')({sigint:true});

const score = Number(prompt('Input score: '))
const attendance = Number(prompt('Input attendance: '))
const parentsIncome = Number(prompt('Input parent\'s income: '))
const isActive = Number(prompt('Is the student active? (1 for yes, 0 for no): '))

let result;

if (score >= 85 && attendance >= 90 && parentsIncome <= 5000000 && isActive === 1){
    result = "Full Scholarship granted"
} else if (score >= 75 && attendance >= 80 && parentsIncome <= 8000000){
    result = "Partial Scholarship granted"
} else {
    result = "No Scholarship"
}

console.log(`Student scholarship status: ${result}`)