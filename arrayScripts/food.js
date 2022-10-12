let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

/// Good code does one thing and does it really well
//calculate subtotal
function calculateSubtotal(lunch) {
    let subtotal = 0;
    for (let i = 0; i < lunch.length; i++) {
        subtotal = subtotal + lunch[i].price;
    }
    return subtotal;
}
//add tip into subtotal
function addTip(subtotal,tipPercent) {
    let total = subtotal + subtotal * tipPercent;
    return total;
}
//calculate check
function calculateCheck(lunch,tipPercent) {
    let subtotal = calculateSubtotal(lunch);
    let total = addTip(subtotal,tipPercent);
    return total;
}