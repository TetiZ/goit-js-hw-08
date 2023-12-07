"use strict";

const items = document.querySelectorAll(".item");
const numberOfcategories = `Number of categories: ${items.length}`;
console.log(numberOfcategories);

const sortedCategories = items.forEach((item) => {
  const headers = item.querySelector("h2").textContent;
  const itemsByCategories = item.querySelectorAll("ul > li");

  console.log(`Category: ${headers}`);
  console.log(`Elements: ${itemsByCategories.length}`);
});
