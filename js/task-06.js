"use strict";

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let newBox;
  let width = 30;
  let height = 30;
  if (input.value >= 1 && input.value <= 100) {
    for (let i = 0; i < amount; i++) {
      newBox = document.createElement("div");
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${width}px`;
      newBox.style.height = `${height}px`;

      divBoxes.append(newBox);
      width += 10;
      height += 10;
    }
    input.value = "";
  }
};

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", () => {
  divBoxes.innerHTML = "";
});
