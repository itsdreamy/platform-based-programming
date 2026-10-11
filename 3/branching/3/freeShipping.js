const prompt = require('prompt-sync')({sigint:true});

const totalPurchase = Number(prompt('Input your total purchase: '))
const isMember = prompt('Are you a member? (yes/no)').toLowerCase()
let shippingFee = Number(prompt('Enter the shipping fee: '))

if (totalPurchase >= 100000 || isMember == "yes"){
    shippingFee = 0
} else {
    shippingFee;
}

console.log(`Shipping fee is Rp${shippingFee}`)