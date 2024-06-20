let form = document.getElementById('contactFormParent');
form.addEventListener('submit', submitButton);

function submitButton(e) {
    alert('Thank You. The form information has been recieved.');
    e.preventDefault();
    
}

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
