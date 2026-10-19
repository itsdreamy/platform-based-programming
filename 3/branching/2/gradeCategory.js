const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt('Enter Student\'s Grade: '))

let result;

if (input <= 100 && input >= 80){
    result = "A"
} else if (input <= 79 && input >= 70){
    result = "B"
} else if (input <= 69 && input >= 60){
    result = "C"
} else if (input <= 59 && input >= 50){
    result = "D"
} else if (input <= 49 && input >= 0){
    result = "E"
} else {
    result = "Invalid Grade"
}

console.log(`Student's Grade: ${input}, Result: ${result}`)