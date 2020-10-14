function validateSignupForm(event) {
    event.preventDefault();

    let txtFirstName = document.querySelector("#firstName");
    let txtLastName = document.querySelector("#lastName");
    let txtEmail = document.querySelector("#email");
    let txtPassword= document.querySelector("#password");

    if (txtFirstName.value === "") {
        txtFirstName.parentElement.classList.add("error");
        txtFirstName.placeholder = "";
    } else {
        txtFirstName.parentElement.classList.remove("error");
    }

    if (txtLastName.value === "") {
        txtLastName.parentElement.classList.add("error");
        txtLastName.placeholder = "";
    } else {
        txtLastName.parentElement.classList.remove("error");
    }

    if ( (txtEmail.value === "") || (!validEmail(txtEmail.value)) ) {
        txtEmail.parentElement.classList.add("error");
        txtEmail.placeholder = "";
    } else {
        txtEmail.parentElement.classList.remove("error");
    }

    if (txtPassword.value === "") {
        txtPassword.parentElement.classList.add("error");
        txtPassword.placeholder = "";
    } else {
        txtPassword.parentElement.classList.remove("error");
    }

    // return true;
}

function validEmail(value) {
    return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/.test(value);
}

const signupForm = document.querySelector("form");
signupForm.addEventListener('submit', validateSignupForm);