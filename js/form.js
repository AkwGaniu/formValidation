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
        // Collecting Registration details

        

        alert(`Super Cool! \nYou did the needful \nYour name is ${name} \nYour email is ${email} \nAnd your password is ${password} `)

    } else {
        alert("Please check the form and do the needful")
    }

}














// let  printError = (elemId, hintMsg) => {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }


// let nameVaalid = () => {

// }

// // Defining a function to validate form 
// function validateForm() {
//     // Retrieving the values of form elements 
//     var name = document.contactForm.name.value;
//     var email = document.contactForm.email.value;
//     var mobile = document.contactForm.mobile.value;
//     var country = document.contactForm.country.value;
//     var gender = document.contactForm.gender.value;
//     var hobbies = [];
//     var checkboxes = document.getElementsByName("hobbies[]");
//     for(var i=0; i < checkboxes.length; i++) {
//         if(checkboxes[i].checked) {
//             // Populate hobbies array with selected values
//             hobbies.push(checkboxes[i].value);
//         }
//     }
    
// 	// Defining error variables with a default value
//     var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
//     // Validate name
//     if(name == "") {
//         printError("nameErr", "Please enter your name");
//     } else {
//         var regex = /^[a-zA-Z\s]+$/;                
//         if(regex.test(name) === false) {
//             printError("nameErr", "Please enter a valid name");
//         } else {
//             printError("nameErr", "");
//             nameErr = false;
//         }
//     }
    
//     // Validate email address
//     if(email == "") {
//         printError("emailErr", "Please enter your email address");
//     } else {
//         // Regular expression for basic email validation
//         var regex = /^\S+@\S+\.\S+$/;
//         if(regex.test(email) === false) {
//             printError("emailErr", "Please enter a valid email address");
//         } else{
//             printError("emailErr", "");
//             emailErr = false;
//         }
//     }
    
//     // Validate mobile number
//     if(mobile == "") {
//         printError("mobileErr", "Please enter your mobile number");
//     } else {
//         var regex = /^[1-9]\d{9}$/;
//         if(regex.test(mobile) === false) {
//             printError("mobileErr", "Please enter a valid 10 digit mobile number");
//         } else{
//             printError("mobileErr", "");
//             mobileErr = false;
//         }
//     }
    
//     // Validate country
//     if(country == "Select") {
//         printError("countryErr", "Please select your country");
//     } else {
//         printError("countryErr", "");
//         countryErr = false;
//     }
    
//     // Validate gender
//     if(gender == "") {
//         printError("genderErr", "Please select your gender");
//     } else {
//         printError("genderErr", "");
//         genderErr = false;
//     }
    
//     // Prevent the form from being submitted if there are any errors
//     if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
//        return false;
//     } else {
//         // Creating a string from input data for preview
//         var dataPreview = "You've entered the following details: \n" +
//                           "Full Name: " + name + "\n" +
//                           "Email Address: " + email + "\n" +
//                           "Mobile Number: " + mobile + "\n" +
//                           "Country: " + country + "\n" +
//                           "Gender: " + gender + "\n";
//         if(hobbies.length) {
//             dataPreview += "Hobbies: " + hobbies.join(", ");
//         }
//         // Display input data in a dialog box before submitting the form
//         alert(dataPreview);
//     }
// };