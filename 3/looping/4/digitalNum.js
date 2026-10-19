const prompt = require('prompt-sync')({ sigint: true });

const num = parseInt(prompt('Enter a positive integer: '));

let temp = num;
let count = 0;
let sum = 0;
let reversed = 0;

while (temp > 0) {
    let digit = temp % 10;
    count++;       
    sum += digit;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log(`Digit count: ${count}`);
console.log(`Digit sum: ${sum}`);
console.log(`Reversed number: ${reversed}`);
console.log(`Palindrome: ${num === reversed ? 'Yes' : 'No'}`);