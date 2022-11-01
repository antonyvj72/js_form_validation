let emailError = document.getElementById("emailError");
let pwdError = document.getElementById("pwdError");
let email = document.getElementById("contactEmail");
let password = document.getElementById("pwd");

// email Validation
function validateEmail() {
  if (!email.value) {
    emailError.innerHTML = "Email can't be blank";   // when the email is zero 
    email.style.borderColor = "rgba(246, 35, 35, 0.84)";
    email.style.outline = "none";
    return false;
  }
  if (!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) { // check email format and throwing error
    emailError.innerHTML = "Please enter valid email";
    email.style.borderColor = "rgba(246, 35, 35, 0.84)";
  } else {
    emailError.innerHTML = "";  // after enter correct email address
    email.style.borderColor = "#55f047";
    return true;
  }
}
// password validation
function validatePassword() {
  if (!password.value) {
    pwdError.innerHTML = "Password can't be blank"; // when password value is zero
    password.style.borderColor = "rgba(246, 35, 35, 0.84)";
    password.style.outline = "none";
    return false;
  }
  if (
    !password.value.match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ // checking password regex 
    )
  ) {
    pwdError.innerHTML =
      "Password must be 8 letters, which must contain atleast one special character, uppercase, lowercase and a number";
    password.style.borderColor = "rgba(246, 35, 35, 0.84)";
    return false;
  }
  {
    pwdError.innerHTML = "";
    password.style.borderColor = "#55f047"; // after enter correct password
    return true;
  }
}
// Submit function
function validateForm() {
  if (!email.value && !password.value) {   // if two value is zero when the user press the login button its shows the errors
    validateEmail();
    validatePassword();
  } else if (!email.value && password.value) {  // if email value is false 
    validateEmail();
  } else if (email.value && !password.value) {
    validatePassword();
  } else {
    email.value = "";
    password.value = "";
    borderGreen();
  }
}
// change of color when submitted
function borderGreen() {
  email.style.borderColor = "";
  password.style.borderColor = "";
}
