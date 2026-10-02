
const products = [
    { name: "Laptop", price: 900, rating: 4.5 },
    { name: "Mouse", price: 30, rating: 2.3 },
    { name: "Keyboard", price: 50, rating: 3.8 },
    { name: "Headphone", price: 80, rating: 2.9 },
    { name: "Monitor", price: 200, rating: 5 },
];

products.forEach((product) => {
    if (product.rating > 3) {
        const starCount = Math.round(product.rating);
        const stars = "*".repeat(starCount);


        console.log(`product:${product.name} | price:$${product.price} | Rating:${stars}`);
    }
}
);