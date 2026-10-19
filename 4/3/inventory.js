// Given an array of product objects, calculate the total inventory value using price x stock. Also return the names of products with stock below 5.
const products = [
    {
        'name': 'Apple',
        'price': 10000,
        'stock': 10, 
        total: function(){
            return this.price * this.stock;
        }
    },
    {
        name: "Banana",
        price: 5000,
        stock: 7,
        total: function(){
            return this.price * this.stock;
        }
    },
    {
        name: "Kiwi",
        price: 20000,
        stock: 4,
        total: function(){
            return this.price * this.stock;
        }
    }, 
    {
        name: "Blueberry",
        price: 15000,
        stock: 2,
        total: function(){
            return this.price * this.stock;
        }
    }
]

let totalItem = 0

products.forEach(item => {
    console.log(item.name + " Price: " + item.price + " Stock: " + item.stock + " Total: " + item.total());
    totalItem += item.total()
})
console.log("==================================================")
console.log(`Total Inventory Price: ${totalItem}`)
console.log("==================================================")
console.log("Items with stocks below 5: " + products.filter(item => item.stock < 5).map(item => item.name));