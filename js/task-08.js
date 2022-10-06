const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", OnSubmit);
function OnSubmit(e) {
  e.preventDefault();
  console.dir(e.currentTarget);
  const { email, password } = e.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  e.currentTarget.reset();
}
