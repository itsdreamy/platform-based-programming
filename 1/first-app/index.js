const chalk = require('chalk');

//Items Catalog
const itemsCatalog = [
    {id: 1, name: 'Oolong tea', price: 15000},
    {id: 2, name: 'Green tea', price: 13000},
    {id: 3, name: 'Thai tea', price: 10000},
    {id: 4, name: 'Black tea', price: 17000}
];

const shoppingCart = [
    {id: 4, qty: 3},
    {id: 1, qty: 2},
    {id: 3, qty: 5}
];

//Header
console.log(chalk.green.bold('====================================================='))
console.log(chalk.yellowBright('==================== SHOPPING CART =================='))
console.log(chalk.green.bold('====================================================='))

let totalPrice = 0;

shoppingCart.forEach(cartItems => {
    const item = itemsCatalog.find(item => item.id === cartItems.id)
    if(item) {
        const subtotal = (item.price * cartItems.qty )
        totalPrice += subtotal
        
        console.log(chalk.green(`${item.name} x ${cartItems.qty} = Rp. ${subtotal}`))
    }
    else {
        console.log(chalk.red("Items not found!"))
    }
})

console.log(chalk.green.bold('====================================================='))
console.log(chalk.magenta(`Total Price: Rp. ${totalPrice}`))
console.log(chalk.green.bold('====================================================='))
console.log(chalk.magenta("Thank You for Shopping with Us! <3"))
console.log(chalk.green.bold('====================================================='))