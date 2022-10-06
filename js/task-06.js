const input = document.querySelector("#validation-input");

const lengthEl = Number(input.dataset.lenght);

input.addEventListener("blur", onNotBlur);

function onNotBlur() {
  if (input.value.length === lengthEl) {
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
  }
}
