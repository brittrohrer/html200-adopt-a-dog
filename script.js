function dogInfo(name, breed, fee) {
    alert('Name: ' + name + '\n' + 'Breed: '  + breed + '\n' + 'Adoption Fee: $' + fee);
}



let cost = 0;
let total = 0;
output = document.getElementById('output');
function adoptCost(price, quantity) {
    cost = (price  * quantity);
    total = cost + total;
    alert('Fee = $' + cost + '\n' + 'New Total: $' + total);
    output.innerHTML = '$' + total;
    return total;
}

let theParent = document.querySelector("#buttonParent");
theParent.addEventListener("click", selectButton, false);

function selectButton(e) {
    let clickedButton = e.target.id;
    console.log(clickedButton);
    e.target.disabled = true;
    e.target.innerText = 'Adopted';
    e.target.style.background = 'red';
}