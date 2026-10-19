// Create an order object containing an array of items. Each item has name, price, and quantity. Add a method that calculates the total cost.

const order = [
    {
        name: "Apple",
        price: 10000,
        quantity: 10,
        total: function() {
            return this.price * this.quantity;
        }
    },
    {
        name: "Banana",
        price: 9000,
        quantity: 20,
        total: function() {
            return this.price * this.quantity;
        }
    },
    {
        name: "Orange",
        price: 20000,
        quantity: 30,
        total: function() {
            return this.price * this.quantity;
        }
    }
]

order.forEach(item => {
    console.log(item.name + " Price: " + item.price + " Qty: " + item.quantity + " Total: " + item.total());
});
