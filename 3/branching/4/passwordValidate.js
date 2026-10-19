const prompt = require('prompt-sync')({sigint:true});

const input = prompt('Input password: ')    

let result;

if (input.length < 8){
    result = "Too short"
} else if (input.length >= 8 && input.length <= 11){
    result = "Moderate"
} else {
    result = "Strong"
}

if (input.match(/[0-9]/)){
    result += " and contains a number"
}


console.log(`Password is ${result}`)