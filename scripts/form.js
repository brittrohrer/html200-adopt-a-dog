let form = document.getElementById('contactFormParent');
form.addEventListener('submit', submitButton);

function submitButton(e) {
    console.log('youve submitted');
    e.preventDefault();
}
    
