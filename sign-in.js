document.addEventListener("DOMContentLoaded", function () {
  //FORM VALIDATION
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    let valid = true;
    clearErrors();

    // Check Email/Username input
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Please enter your Email or Username.");
      valid = false;
    }

    // Check Password input
    if (passwordInput.value.trim() === "") {
      showError(passwordInput, "Please enter your Password.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
      console.log("Form validation failed.");
    } else {
      console.log("Form submitted successfully.");
    }
  });

  // Function to display error messages
  function showError(inputElement, message) {
    const errorMessage = document.createElement("small");
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    inputElement.style.borderColor = "red";
    inputElement.parentElement.appendChild(errorMessage);
  }

  // Function to clear error messages
  function clearErrors() {
    document.querySelectorAll("small").forEach((small) => small.remove());
    [emailInput, passwordInput].forEach((input) => {
      input.style.borderColor = "";
    });
  }

  // SOCIAL LOGIN BUTTON HANDLING
  const socialButtons = document.querySelectorAll(".social-btn");

  socialButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const platform = this.textContent.replace("Continue with ", "").trim();
      alert(`Redirecting to ${platform} login...`);
      console.log(`Redirecting to ${platform} login.`);
    });
  });

  // HEADER NAVIGATION HIGHLIGHTING
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to the clicked link
      this.classList.add("active");
      console.log(`Navigated to ${this.textContent}`);
    });
  });
});
