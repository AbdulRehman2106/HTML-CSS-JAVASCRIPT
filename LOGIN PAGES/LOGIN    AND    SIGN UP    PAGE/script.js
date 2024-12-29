


const title = document.getElementById('title');

const nameField = document.getElementById('nameField');

const submitButton = document.getElementById('submitButton');

const signUpBtn = document.getElementById('signUpBtn');

const loginForm = document.getElementById('loginForm');

const emailField = document.getElementById('emailField');

const passwordField = document.getElementById('passwordField');

const errorMessage = document.getElementById('errorMessage');



let users = [];



signUpBtn.onclick = function(event) {

    event.preventDefault();

    title.innerHTML = "Sign Up";

    nameField.style.display = "block";

    submitButton.value = "Sign Up";

    errorMessage.style.display = "none";

};



loginForm.onsubmit = function(event) {

    event.preventDefault();

    if (submitButton.value === "Sign Up") {

        const user = {

            name: nameField.value,

            email: emailField.value,

            password: passwordField.value

        };

        users.push(user);

        title.innerHTML = "LOGIN";

        nameField.style.display = "none";

        submitButton.value = "Login";

        loginForm.reset();

        errorMessage.style.display = "none";

        alert("Sign up successful! Please log in.");

    } else {

        const email = emailField.value;

        const password = passwordField.value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {

            alert("Login successful!");

            errorMessage.style.display = "none";

        } else {

            errorMessage.style.display = "block";

        }

    }

};

