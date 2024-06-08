function dogInfo(name, breed, fee) {
    alert('Name: ' + name + '\n' + 'Breed: '  + breed + '\n' + 'Adoption Fee: $' + fee);
}

// let count = 0;
// total = 0;
// price = 123.45;
// function adoptCost() {
//     count = count + 1;
//     total = count * price;
//     alert('New Total: $' + total);
// }

let cost = 0;
function adoptCost(price, quantity) {
    cost = price  * quantity;
    alert('Total = $' + cost);
}