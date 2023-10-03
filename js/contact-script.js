var phoneRegex = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
// var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var emailRegex = /^\S{1,}[@]\S{1,}[.]\S{1,}$/; 

let user_fname = document.getElementById("user_fname");
let user_lname = document.getElementById("user_lname");
let user_email = document.getElementById("user_email");
let user_phone = document.getElementById("user_phone");
let user_message = document.getElementById("user_message");

var fnameError = document.getElementById("user_fname-error")
var lnameError = document.getElementById("user_lname-error")
var emailError = document.getElementById("user_email-error")
var phoneError = document.getElementById("user_phone-error")
var messageError = document.getElementById("user_message-error")

function validateFName() {
    
    if (user_fname.value == "") {
        fnameError.innerHTML = "First name is required"
        return false;
    } else {
        fnameError.innerHTML = ""
        return true
    }

}

function validateLName() {
    if (user_lname.value == "") {
        lnameError.innerHTML = "Last name is required"
        return false;
    } else {
        lnameError.innerHTML = ""
        return true
    }
}

function validateEmail() {
    if (emailRegex.test(user_email.value)) {
        emailError.innerHTML = ""
        return true
    } else {
        emailError.innerHTML = "Format email as  xyz@domain.top-level-domain"
        return false
    }
    
}

function validatePhone() {
    if (phoneRegex.test(user_phone.value)) {
        phoneError.innerHTML = ""
        return true
    } else {
        phoneError.innerHTML = "format: 123-456-7890"
        return false
    }
    
}

function validateMessage() {
    if (user_message.value.length == 0) {
        messageError.innerHTML = "Message cannot be blank"
        return false;
    } else {
        messageError.innerHTML = ""
        return true;
    }
}


function validateForm() {
    validateFName()
    validateLName()
    validateEmail()
    validatePhone()
    validateMessage()
    if (!(!validateFName() || !validateLName() || !validateEmail() || !validatePhone() || !validateMessage())) {
        console.log("success")
        return true
    } else {
        console.log("failed")
        return false
    }



}

let serviceID = "service_fovk43b"
let templateID = "template_v5qlmxs"

emailjs.init("QNe7UScNSnBJ1eqAm");

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            
            const inputFields = {
                user_fname: user_fname.value,
                user_lname: user_lname.value,
                user_email: user_email.value,
                user_phone: user_phone.value,
                user_message: user_message.value
            }

            emailjs.sendForm(serviceID, templateID, this)
                .then(function() {
                    console.log('SUCCESS!');
                    user_fname.value = ""
                    user_lname.value = ""
                }, function(error) {
                    console.log('FAILED...', error);
                });
        }
        console.log(document.getElementById("user_email").value)
        
    });
}