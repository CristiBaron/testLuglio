const formElement = document.querySelector("form");
const formContainer = document.getElementById("login-form");
const controlPanel = document.getElementById("control-panel");
const usernameSpan = document.getElementById("username-span");
const errorSpan = document.getElementById("error-span");
const loadingGif = document.getElementById("loading");

let loginAttempts = 0;

const displayLoader = () => {
  loadingGif.classList.remove("hidden");
  return Promise.resolve();
};

const hideLoader = () => {
  loadingGif.classList.add("hidden");
  return Promise.resolve();
};

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const username = formData.get("username");
  const password = formData.get("password");
  loginAttempts++;
  if (username === "eliaspower" && password === "cicalino") {
    displayLoader()
      .then(() => {
        formElement.classList.add("hidden");
        return delay(5000);
      })
      .then(() => {
        hideLoader();
        formContainer.classList.add("hidden");
        controlPanel.classList.remove("hidden");
        usernameSpan.innerHTML = username;
      });
  } else {
    errorSpan.classList.remove("hidden");
    if (loginAttempts === 3) {
      errorSpan.innerHTML = "Troppi tentativi, riprova più tardi.";
      formElement.classList.add("hidden");
    }
  }
});
