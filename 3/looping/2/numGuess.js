const prompt = require('prompt-sync')({sigint: true});

const secretNumber = 37 ;
let guess = 0;
let attempts = 0;

while (guess !== secretNumber && attempts < 7) {
    guess = parseInt(prompt("Guess the secret number between 1 and 100 (or enter 0 to exit): "));
    attempts++;
    if (guess < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guess > secretNumber) {
        console.log("Too high! Try again.");
    }
}

if (guess === secretNumber) {
    console.log(`Congratulations! You guessed the secret number ${secretNumber} in ${attempts} attempts.`);
} else {
    console.log(`Sorry, you've used all your attempts. The secret number was ${secretNumber}.`);
}