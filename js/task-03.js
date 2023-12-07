"use strict";

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", updateName);

function updateName() {
  let greeting;
  const trimmedOutputName = inputName.value.trim();
  if (trimmedOutputName === "" || trimmedOutputName === " ") {
    greeting = "Anonymous";
  } else {
    greeting = trimmedOutputName;
  }

  outputName.textContent = greeting;
}
