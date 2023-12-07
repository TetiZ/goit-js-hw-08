"use strict";

const form = document.querySelector(".login-form");

class User {
  constructor(formEmail, formPass) {
    this.email = formEmail;
    this.password = formPass;
  }
}
let newUser;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formEmail = form.elements.email.value;
  const formPass = form.elements.password.value;

  if (formEmail === "" || formPass === "") {
    alert("All form fields must be filled in");
  } else {
    newUser = new User(formEmail, formPass);
    console.log(newUser);
  }

  form.reset();
});
