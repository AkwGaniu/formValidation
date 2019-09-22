// Form Input handle
let nameField =  document.querySelector("#name")
let emailField = document.querySelector("#email")
let passField = document.querySelector("#pass")
let passConfirmField = document.querySelector("#passConfirm")
let submit = document.querySelector("#submit")

// 	// Defining error variables with a default value
let nameErr = emailErr = passErr  = passConfirmErr = true;


//// On submission of the form
submit.addEventListener("click", () => {
    generalValidation()
})


//Print Error message
const printError = (elementId, msg) => {
    document.querySelector(elementId).innerHTML = msg
}


//Name Validation
const validName = () => {
    let name = nameField.value

    if(name == "") {
            printError("#nameError", "Please enter your full name");
        } else {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(name) === false) {
                printError("#nameError", "Please enter a valid name");
            } else {
                printError("#nameError", "");
                nameErr = false;
            }
        }
        return name
}


//Email  Validation
const validEmail = () => {
    let email = emailField.value

    if(email == "") {
        printError("#emailError", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("#emailError", "Please enter a valid email address");
        } else{
            printError("#emailError", "");
            emailErr = false;
        }
    }
    return email
}


// Password validation
const validPassword = () => {
    let password = passField.value

    if(password == "") {
        printError("#passError", "Please enter a Password");
    } else {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

        if (regex.test(password) === false) {
            printError("#passError", "Please enter a Password of at least one number, upprercase letter \n\r and special symbol which is not less than 8 characters");

        } else {
            printError("#passError", "")
            passErr = false
        }
    }

    return password
}


// Confirm password
const validPasswordConfirm = () =>  {
    let confirmPass = passConfirmField.value
    let currentPassword = validPassword()

    if(confirmPass === currentPassword) {
        printError("#passConfirmError", "")
        passConfirmErr = false

    } else {
        printError("#passConfirmError", "This password does not match the initial Password")
    }

}


//General Validation
const generalValidation = () => {
    let name = validName()
        let email = validEmail()
        let password = validPassword()
        validPasswordConfirm()

    if( nameErr == false && emailErr == false && passErr  == false && passConfirmErr ==  false) {
        alert(`Super Cool! \nYou did the needful \nYour name is ${name} \nYour email is ${email} \nAnd your password is ${password} `)
        nameErr = emailErr = passErr  = passConfirmErr = true;
    } else {
        alert("Please check the form and do the needful")
        nameErr = emailErr = passErr  = passConfirmErr = true;
    }

}