const form = document.getElementById("form");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const passwordConfirmInput = document.getElementById("confirm-password");
const passwordConfirmError = document.getElementById("confirm-password-error");

const errorMessage = function (element, message) {
  element.innerText = message;
};

const passwordValidation = function () {
  const valueLength = passwordInput.value.length;

  const parent = passwordInput.parentElement;

  if (!passwordInput.value) {
    parent.className = "form-control error";
    errorMessage(passwordError, "Required field!");
  } else if (valueLength < 6) {
    parent.className = "form-control error";
    errorMessage(passwordError, "Password must be at least 6 characters!");
  } else if (valueLength > 15) {
    parent.className = "form-control error";
    errorMessage(passwordError, "Password must be less than 15 characters!");
  } else {
    parent.className = "form-control success";
  }
};

const confirmPasswordValidation = function () {
  const parent = passwordConfirmInput.parentElement;

  if (!passwordConfirmInput.value) {
    parent.className = "form-control error";
    errorMessage(passwordConfirmError, "Required field!");
  } else if (passwordConfirmInput.value !== passwordInput.value) {
    parent.className = "form-control error";
    errorMessage(passwordConfirmError, "Passwords do not match!");
  } else {
    parent.className = "form-control success";
  }
};

const handleChangePassInput = function () {
  passwordValidation();
};

const handleChangeConfirmPassInput = function () {
  confirmPasswordValidation();
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  passwordValidation();
  confirmPasswordValidation();
});
