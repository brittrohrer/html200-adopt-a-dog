let form = document.getElementById('contactFormParent');
form.addEventListener('submit', submitButton);

function submitButton(e) {
    alert('Thank You. The form information has been recieved.');
    e.preventDefault();
}
    
