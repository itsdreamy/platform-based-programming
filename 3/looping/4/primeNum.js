const prompt = require('prompt-sync')({ sigint: true });

const n = parseInt(prompt('Enter a positive integer N: '));

let primes = [];
let sum = 0;

for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(num);
        sum += num;
    }
}

console.log(`Prime numbers: ${primes.join(', ')}`);
console.log(`Total primes: ${primes.length}`);
console.log(`Sum: ${sum}`);