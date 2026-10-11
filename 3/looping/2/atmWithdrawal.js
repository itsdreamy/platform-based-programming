const prompt = require('prompt-sync')({sigint: true});
let initialBalance = 1000000;
let withdrawalAmount = 1;

while (withdrawalAmount > 0) {
    withdrawalAmount = parseFloat(prompt("Enter the amount to withdraw (or enter 0 to exit): "));
    if (withdrawalAmount > initialBalance) {
        console.log("Insufficient balance. Please enter a smaller amount.");
        console.log(`Current balance: ${initialBalance}`);
    } else if (withdrawalAmount > 0 && withdrawalAmount <= initialBalance) {
        initialBalance -= withdrawalAmount;
        console.log(`Withdrawal successful. Remaining balance: ${initialBalance}`);
    } else{
        console.log("Goodbye! Thank you for using our ATM service.");
    }
}