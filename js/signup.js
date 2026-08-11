// ===== Sign Up form validation (UI demo only — nothing is saved) =====
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  const successMessage = document.getElementById("formSuccess");

  function showError(fieldName, message) {
    const errorEl = signupForm.querySelector(
      `.field-error[data-for="${fieldName}"]`,
    );
    const inputEl = signupForm.querySelector(`#${fieldName}`);
    if (errorEl) errorEl.textContent = message;
    if (inputEl) inputEl.classList.toggle("invalid", Boolean(message));
  }

  function validate() {
    let isValid = true;

    const fullName = signupForm.fullName.value.trim();
    if (fullName.length < 2) {
      showError("fullName", "Please enter your full name.");
      isValid = false;
    } else {
      showError("fullName", "");
    }

    const email = signupForm.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showError("email", "Enter a valid email address.");
      isValid = false;
    } else {
      showError("email", "");
    }

    const password = signupForm.password.value;
    if (password.length < 8) {
      showError("password", "Password must be at least 8 characters.");
      isValid = false;
    } else {
      showError("password", "");
    }

    const confirmPassword = signupForm.confirmPassword.value;
    if (confirmPassword !== password || confirmPassword.length === 0) {
      showError("confirmPassword", "Passwords don't match.");
      isValid = false;
    } else {
      showError("confirmPassword", "");
    }

    const termsAccepted = signupForm.terms.checked;
    const termsError = signupForm.querySelector(
      '.field-error[data-for="terms"]',
    );
    if (!termsAccepted) {
      termsError.textContent = "You need to accept the terms to continue.";
      isValid = false;
    } else {
      termsError.textContent = "";
    }

    return isValid;
  }

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.hidden = true;

    if (validate()) {
      // No backend yet — this just confirms the form works end to end.
      successMessage.hidden = false;
      signupForm.reset();
    }
  });
}
