const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;
var discountAmount = 0


function calculateTotal(productPrice, quantity, discountPercent) {
    const subtotal = productPrice * quantity;
    discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;
    return total;
}

const calculateShippingCost = (total) => {
    const shippingCost = total > 500000 ? 0 : 20000;
    return shippingCost;
}

const total = calculateTotal(productPrice, quantity, discountPercent);
const shipping = calculateShippingCost(total);
const finalTotal = total + shipping;

console.log(`Customer: ${customerName}`);
console.log(`Product Price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${productPrice * quantity}`);
console.log(`Discount: Rp${discountAmount}`);
console.log(`After Discount: Rp${total}`);
console.log(`Shipping: Rp${shipping}`);
console.log(`Total Payment: Rp${finalTotal}`);