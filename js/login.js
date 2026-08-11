// ===== Log In form validation (UI demo only — no real account check) =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  const successMessage = document.getElementById("loginSuccess");

  function showLoginError(fieldName, message) {
    const errorEl = loginForm.querySelector(
      `.field-error[data-for="${fieldName}"]`,
    );
    const inputEl = loginForm.querySelector(`#${fieldName}`);
    if (errorEl) errorEl.textContent = message;
    if (inputEl) inputEl.classList.toggle("invalid", Boolean(message));
  }

  function validateLogin() {
    let isValid = true;

    const email = loginForm.loginEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showLoginError("loginEmail", "Enter a valid email address.");
      isValid = false;
    } else {
      showLoginError("loginEmail", "");
    }

    const password = loginForm.loginPassword.value;
    if (password.length === 0) {
      showLoginError("loginPassword", "Enter your password.");
      isValid = false;
    } else {
      showLoginError("loginPassword", "");
    }

    return isValid;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.hidden = true;

    if (validateLogin()) {
      // No backend yet — this just confirms the form works end to end.
      successMessage.hidden = false;
      loginForm.reset();
    }
  });
}
