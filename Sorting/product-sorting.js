let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Twix", price: 1.19},
    {product: "Sourpatch", price: 2.25},
    {product: "Reese's", price: 1.19},
    {product: "Hershey Kisses", price: 1.98},
    {product: "Skittles", price: 1.49},
    {product: "Gummy Bears", price: 2.45},
];

products.sort (function (a,b) {
    if (a.product < b.product) {
        return -1;
    } else if (a.product == b.product){
        return 0;
    } else {
        return 1;
    }
});

console.log(products);

console.log(`-------------------------------------------`);

products.sort (function (a,b) {
    return b.price - a.price;
})
console.log(products);