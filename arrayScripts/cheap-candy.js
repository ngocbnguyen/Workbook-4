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
    // // Which candies costs less than $4.00?
function getCheapCandy(products,price) {
	    for (let i = 0; i < products.length; i++) {
	        const candy = products[i];
	        if (candy.price < price) {
	            console.log(candy.product);
	        }
	    }
	
}
// getCheapCandy(products,4);
    // // Which candies has "M&M" its name?
function searchCandy(products,name) {
	    for (let index = 0; index < products.length; index++) {
	        const candy = products[index];
	        if (candy.product.indexOf(name)!= -1) {
	            console.log(candy.product);
	        }
	    }
}

    // // Do we carry "Swedish Fish"?
function candySearch(products,name) {
	    for (let index = 0; index < products.length; index++) {
	        const candy = products[index];
	        if (candy.product.indexOf(name) != -1) {
	            console.log(`We do carry ${candy.product}.`);
	        }
	    }
}
