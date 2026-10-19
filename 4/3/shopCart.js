// Create a cart object with methods to add products, remove products, and calculate the total. Adding a product with an existing ID must increase its quantity instead of creating a duplicate entry.

const cart = {
    products: [],
    addProduct(product) {
        const existingProduct = this.products.find(p => p.id === product.id);
        
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            this.products.push(product);
        }
    },
    removeProduct(product) {
        this.products = this.products.filter(p => p.id !== product.id);
    },
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    },
};

cart.addProduct({ id: 1, name: "Product 1", price: 10, quantity: 1 });
cart.addProduct({ id: 2, name: "Product 2", price: 20, quantity: 2 });
cart.addProduct({ id: 1, name: "Product 1", price: 10, quantity: 1 }); 
// cart.removeProduct({ id: 2 });

for (const product of cart.products) {
    console.log(product);
}

console.log("Total:", cart.calculateTotal());