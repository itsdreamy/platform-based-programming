// Create a product object with name, price, and stock. Change its price and increase its stock by 5. Display the updated object.

const productInfo = [
    {
        id: 1,
        name: "BANANA",
        price: 100,
        stock: 100,
    },
    {
        id: 2,
        name: "APPLE",
        price: 200,
        stock: 200,
    },
    {
        id: 3,
        name: "ORANGE",
        price: 300,
        stock: 300,
    },
    {
        id: 4,
        name: "PINEAPPLE",
        price: 400,
        stock: 400,
    }
]

productInfo.forEach(product => {
    console.log("name: " + product.name + ", price: " + product.price + ", stock: " + product.stock);
});

productInfo.map(product => {
    product.stock += 5;
    return product;
});

console.log("--------------------------------");
productInfo.forEach(product => {
    console.log("name: " + product.name + ", price: " + product.price + ", stock: " + product.stock);
});
