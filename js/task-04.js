let counterValue = 0;
const buttonEl = document.querySelectorAll("button");
const valueEl = document.querySelector("#value");

buttonEl[0].addEventListener("click", () => {
  valueEl.textContent = counterValue -= 1;
});

buttonEl[1].addEventListener("click", () => {
  valueEl.textContent = counterValue += 1;
});

// let counterValue = 0;
// const btnEl = document.querySelectorAll("button");
// const valueEl = document.querySelector("#value");
// btnEl[0].addEventListener("click", () => {
//   valueEl.textContent = counterValue -= 1;
// });
// btnEl[1].addEventListener("click", () => {
//   valueEl.textContent = counterValue += 1;
// });
