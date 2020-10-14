
const signupForm = document.querySelector("form");
const txtFirstName = document.querySelector("#firstName");
const txtLastName = document.querySelector("#lastName");
const txtEmail = document.querySelector("#email");
const txtPassword= document.querySelector("#password");


function validEmail(value) {
    // Regex found at https://emailregex.com/
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);
}
function displayError(inputElement) {
    inputElement.parentElement.classList.add("error");
    inputElement.placeholder = "";
}
function clearError(inputElement) {
    inputElement.parentElement.classList.remove("error");
}



function validateSignupForm(event) {
    if (txtFirstName.value === "") {
        displayError(txtFirstName);
    } else {
        clearError(txtFirstName);
    }

    if (txtLastName.value === "") {
        displayError(txtLastName);
    } else {
        clearError(txtLastName);
    }

    if ( (txtEmail.value === "") || (!validEmail(txtEmail.value)) ) {
        displayError(txtEmail);
    } else {
        clearError(txtEmail);
    }

    if (txtPassword.value === "") {
        displayError(txtPassword);
    } else {
        clearError(txtPassword);
    }

    // Call this when any inputs are invalid
    // to prevent form submission
    event.preventDefault();
}


signupForm.addEventListener('submit', validateSignupForm);