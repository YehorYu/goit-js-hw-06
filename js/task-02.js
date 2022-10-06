const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientEl = document.querySelector("ul");

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemEl = document.createElement("li");
//   itemEl.innerHTML = ingredients[i];
//   itemEl.classList.add("item");

//   elements.push(itemEl);
// }

// ingredientEl.append(...elements);

const ingredientEl = document.querySelector("ul");

const items = ingredients.map((item) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = item;
  return itemEl;
});
console.log(items);
ingredientEl.append(...elements);
