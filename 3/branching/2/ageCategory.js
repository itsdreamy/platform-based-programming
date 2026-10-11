const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt('Enter the age (years): '))

let result;

if (input >= 0 && input <= 5){
    result = "Toddler"
} else if (input > 5 && input <= 12){
    result = "Child"
} else if (input > 12 && input <= 17){
    result = "Teenager"
} else if (input > 17 && input <= 59){
    result = "Adult"
} else if (input >= 60 && input <= 120){
    result = "Senior"
} else {
    result = "Invalid Age"
}

console.log(`Age ${input} is ${result}`)