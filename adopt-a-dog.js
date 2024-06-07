function dogInfo(name, breed, fee) {
    alert('Name: ' + name + ', Breed: ' + breed + ', Adoption Fee: $' + fee);
}

let count = 0;
total = 0;
//output = document.getElementById('output')
function countClicks() {
    count = count + 1;
    total = count * 123.45;
    //output.innerHTML = '$' + total;
    alert('New Total: $' + total);
}