// Get form event listener
let form = document.getElementById('contactFormParent');
form.addEventListener('submit', submitButton);

// alert form submission
function submitButton(e) {
    alert('Thank You. The form information has been recieved.');
    e.preventDefault();
    // console.log form input values
    let inputsText = document.querySelectorAll('.form-text-input');
    let inputsId = document.querySelectorAll('.form-text-input');
    let inputsRadio = document.querySelectorAll('.form-input-radio');
    let inputsCheckbox = document.querySelectorAll('.form-input-checkbox');
    function inputsValue() {
        for (i = 0; i < inputsText.length; i++) {
            console.log(`${inputsId[i].id}:  ${inputsText[i].value}`);
        }
        for (i = 0; i < inputsRadio.length; i++) {
            if (inputsRadio[i].checked) {
                let radioValue = inputsRadio[i].value;
                console.log(`Preferred Method of Contact: ${radioValue}`);
            } 
        }
        for (i = 0; i < inputsCheckbox.length; i++) {
            if (inputsCheckbox[i].checked) {
                let checkboxValue = inputsCheckbox[i].value;
                console.log(`Recieve emails about: ${checkboxValue}`);
            } 
        }
    }
}


// Preselected Defaults
function preSelect() {
    let inputDefaultContact = document.getElementById('email');
    inputDefaultContact.checked = true;
    let inputDefaultEmailUpdatedDogs = document.getElementById('updated-dogs');
    inputDefaultEmailUpdatedDogs.checked = true;
    let inputDefaultEmailBlogs = document.getElementById('blogs');
    inputDefaultEmailBlogs.checked = true;
}


// validate form fields
function validateForm() {
    let inputName = document.getElementById('contact-name');
    let inputEmail = document.getElementById('contact-email');
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let inputPhone = document.getElementById('phone');
    let inputMessage = document.getElementById('message');

    inputName.setAttribute("required", "true");
    inputEmail.setAttribute("required", "true");
    inputPhone.setAttribute("required", "true");
    inputPhone.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
    inputPhone.setAttribute("placeholder", "123-456-7890");
    inputMessage.setAttribute("required", "true");
    
    
    if (inputEmail.value.match(validEmail)) {
        return true;
    } else {
        console.log("Invalid email address \n Form has not been recieved");
        return false;
    }
}