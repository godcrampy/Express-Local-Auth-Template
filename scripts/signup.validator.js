const nameInput = document.getElementById("form-name");
const nameInputHelp = document.getElementById("form-name-help");
const usernameInput = document.getElementById("form-username");
const usernameInputHelp = document.getElementById("form-username-help");
const emailInput = document.getElementById("form-email");
const emailInputHelp = document.getElementById("form-email-help");
const passwordInput = document.getElementById("form-password");
const passwordInputHelp = document.getElementById("form-password-help");
const rePasswordInputHelp = document.getElementById("form-repassword-help");
const rePasswordInput = document.getElementById("form-repassword");
let submitButton = document.getElementById("submit-button");
let users = [];
let location = window.location;
let url = location.protocol + "//" + location.hostname + ":" + location.port + "/check-username-availability";
fetch(url)
  .then(response => response.json())
  .then(data => users = data);
let validator = {
  name: false,
  email: false,
  username: false,
  password: false,
  rePassword: false
};

nameInput.addEventListener("blur", () => {
  let value = nameInput.value;
  if (value === "") {
    markNegative(nameInput);
    markNegative(nameInputHelp);
    nameInputHelp.hidden = false;
    nameInputHelp.innerText = "Enter your First Name";
    validator.name = false;
  } else {
    markPositive(nameInput);
    markPositive(nameInputHelp);
    nameInput.hidden = false;
    nameInputHelp.innerText = `Hi ${value}, Welcome to Homework Hub`;
    validator.name = true;
    checkValidation();
  }
});

usernameInput.addEventListener("blur", () => {
  let value = usernameInput.value;
  if (value === "") {
    markNegative(usernameInput);
    markNegative(usernameInputHelp);
    usernameInputHelp.hidden = false;
    usernameInputHelp.innerText = "Enter a username";
    validator.username = false;
  } else {
    if (userExists(value)) {
      markNegative(usernameInput);
      markNegative(usernameInputHelp);
      usernameInputHelp.hidden = false;
      usernameInputHelp.innerText = "Someone already took that username sadly.";
      validator.username = false;
    } else {
      markPositive(usernameInput);
      markPositive(usernameInputHelp);
      usernameInputHelp.hidden = false;
      usernameInputHelp.innerText = "That's seems a good one!";
      validator.username = true;
      checkValidation();
    }
  }
});

emailInput.addEventListener("blur", () => {
  let value = emailInput.value;
  if (value === "") {
    markNegative(emailInput);
    markNegative(emailInputHelp);
    emailInputHelp.hidden = false;
    emailInputHelp.innerText = "Enter an email";
    validator.email = false;
  } else {
    if (validateEmail(value)) {
      markPositive(emailInput);
      markPositive(emailInputHelp);
      emailInputHelp.hidden = false;
      emailInputHelp.innerText = "All set!";
      validator.email = true;
      checkValidation();
    } else {
      markNegative(emailInput);
      markNegative(emailInputHelp);
      emailInputHelp.hidden = false;
      emailInputHelp.innerText = "Invalid email! Did you miss something?";
      validator.email = false;
    }
  }
});

passwordInput.addEventListener("blur", () => {
  let value = passwordInput.value;
  if (value === "") {
    markNegative(passwordInput);
    markNegative(passwordInputHelp);
    passwordInputHelp.hidden = false;
    passwordInputHelp.innerText = "Enter a password";
    validator.password = false;
  } else {
    if (validatePassword(value)) {
      markPositive(passwordInput);
      markPositive(passwordInputHelp);
      passwordInputHelp.hidden = false;
      passwordInputHelp.innerText = "Almost Done!";
      validator.password = true;
      checkValidation();
    } else {
      markNegative(passwordInput);
      markNegative(passwordInputHelp);
      passwordInputHelp.hidden = false;
      passwordInputHelp.innerText = "Please make it 8 or more charecters and having atleast one number";
      validator.password = false;
    }
  }
});

rePasswordInput.addEventListener("change", () => {
  let value = rePasswordInput.value;
  if (value != passwordInput.value) {
    markNegative(rePasswordInput);
    markNegative(rePasswordInputHelp);
    rePasswordInputHelp.hidden = false;
    rePasswordInputHelp.innerText = "Uh Oh! Passwords don't match!";
    validator.rePassword = false;
  } else {
    markPositive(rePasswordInput);
    markPositive(rePasswordInputHelp);
    rePasswordInputHelp.hidden = false;
    rePasswordInputHelp.innerText = "Passwords match! Wohoo!";
    validator.rePassword = true;
    checkValidation();
  }
});

function checkValidation() {
  for (const bool of Object.values(validator))
    if (!bool)
      return;
  submitButton.removeAttribute("disabled");
}

function markPositive(element) {
  element.classList.add("is-success");
  element.classList.remove("is-danger");
}

function markNegative(element) {
  element.classList.add("is-danger");
  element.classList.remove("is-success");
}

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const regex = /(?=.*[0-9])/;
  return regex.test(String(password).toLowerCase()) && password.length > 7;
}

function userExists(username) {
  return users.includes(username);
}