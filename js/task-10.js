const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");
const input = document.querySelector("input");

let value = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = input.value;

  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = `${getRandomHexColor()}`;
  box.style.width = value + "px";
  box.style.height = value + "px";
  boxEl.after(box);
}

function destroyBoxes() {
  const boxDestroy = document.querySelector(".box");
  boxDestroy.remove();
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
