"use strict";

const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = () => {
  const newColor = getRandomHexColor();
  color.textContent = newColor;
  body.style.backgroundColor = newColor;
};

btn.addEventListener("click", handleClick);
