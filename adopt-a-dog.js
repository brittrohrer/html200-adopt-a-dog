function dogInfo(name, breed, fee) {
    alert('Name: ' + name + '\n' + 'Breed: '  + breed + '\n' + 'Adoption Fee: $' + fee);
}



let cost = 0;
let count = 0;
let total = 0;
output = document.getElementById('output');
function adoptCost(price, quantity) {
    cost = price  * quantity;
    count = count + 1;
    total = count * price;
    alert('Fee = $' + cost + '\n' + 'New Total: $' + total);
    output.innerHTML = '$' + total;
}