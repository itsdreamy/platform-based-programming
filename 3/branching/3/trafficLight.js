const prompt = require('prompt-sync')({sigint:true});

const input = prompt('Enter color (red, yellow, green): ')

let result;

if (input === "red"){
    result = "Stop"
} else if (input === "yellow"){
    result = "Get Ready"
} else if (input === "green"){
    result = "Go"
} else {
    result = "Invalid Color"
}

console.log(`${input} is ${result}`)