document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const accountType = document.querySelector(
      'input[name="accountType"]:checked'
    );
    
    // Check Input fields
    if (!name || !email || !password || !confirmPassword || !accountType) {
      alert("Please fill out all the fields.");
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert(
      `Registration Successful!\n\nName: ${name}\nEmail: ${email}\nAccount Type: ${accountType.value}`
    );

    // Reset the form
    registerForm.reset();
  });
});
