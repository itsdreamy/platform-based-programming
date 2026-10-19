const prompt = require('prompt-sync')({sigint:true});

const input = Number(prompt('Input a number: '))

let result;

switch (input) {
    case 1:
        result = "Monday"
        break;
    case 2:
        result = "Tuesday"
        break;
    case 3:
        result = "Wednesday"
        break;
    case 4:
        result = "Thursday"
        break;
    case 5:
        result = "Friday"
        break;
    case 6:
        result = "Saturday"
        break;
    case 7:
        result = "Sunday"
        break;
    default:
        result = "Invalid Day"
}

console.log(`Day ${input} is ${result}`)