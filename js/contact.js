const form = document.getElementById("contactForm");
const yourName = document.getElementById("yourName");
const yourNameError = document.getElementById("yourNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const message = document.getElementById("message");
const messageError = document.getElementById("messageError");
const button = document.querySelector(".btn");
const messageYou = document.querySelector(".messageYou");

function validateForm(event) {

    event.preventDefault();

    var hasErrors = false;

    if(checkLength(yourName.value, 1)===true) {
        yourNameError.style.display = "none";
    } else {
        hasErrors = true;
        yourNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        hasErrors = true;
        emailError.style.display = "block";
    }

     if (checkLength(message.value, 1) === true) {
        messageError.style.display = "none";
    } else {
        hasErrors = true;
        messageError.style.display = "block"; 
    }

       if(!hasErrors) {
       messageYou.innerHTML = '<div class="messageYou"><h1>Your message has been sent..</h1><a href="index.html">Home</a></div>';
       form.reset();
    }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}