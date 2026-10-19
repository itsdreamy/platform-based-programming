const prompt = require('prompt-sync')({sigint:true});

const totalPurchase = Number(prompt('Input total purchase amount: '))
const payment = Number(prompt('Input payment amount: '))
const isMember = Number(prompt('Are you a member? (1 for yes, 0 for no): '))

let result;
let totalAfterDiscount = totalPurchase;

if (isMember === 1) {
    totalAfterDiscount = totalPurchase - (totalPurchase * (10/100)); // 10% discount for members
    if (payment >= totalAfterDiscount) {
        result = "Payment successful with member discount.";
    } else {
        result = "Insufficient payment.";
    }
} else {
    totalAfterDiscount = totalPurchase; // No discount for non-members
    if (payment >= totalAfterDiscount) {
        result = "Purchase successful.";
    } else {
        result = "Insufficient payment.";
    }
}

let change = payment - totalAfterDiscount;
console.log(`Total after discount: ${totalAfterDiscount}`);
console.log(`Change: ${change}`);
console.log(result);