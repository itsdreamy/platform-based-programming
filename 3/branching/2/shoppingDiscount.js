const prompt = require('prompt-sync')({sigint:true});

const totalPurchase = Number(prompt('Input your total purchase: '))
let discount = 0

if (totalPurchase >= 1000000){
    discount = (20/100)
} else if(totalPurchase >= 500000){
    discount = (10/100)
} else if (totalPurchase >= 250000){
    discount = (5/100)
} else{
    discount = 0
}

const finalPrice = totalPurchase - (totalPurchase * discount)
console.log(`Discount: ${discount * 100}%`)
console.log(`Final price after discount: ${finalPrice}`)