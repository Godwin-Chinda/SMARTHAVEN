document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.querySelector(".save-btn");
  const cancelButton = document.querySelector(".cancel-btn");

  const nameInput = document.getElementById("name");
  const localityInput = document.getElementById("locality");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");

  const phonePattern = /^[0-9]{10,14}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateInputs() {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      alert("Name cannot be empty.");
      isValid = false;
    }

    if (!phonePattern.test(phoneInput.value.trim())) {
      alert("Please enter a valid phone number (10-14 digits).");
      isValid = false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    return isValid;
  }

  saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const profileData = {
        name: nameInput.value,
        locality: localityInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
      };

      console.log("Profile Saved Successfully!", profileData);
      alert("Profile saved successfully!");
    }
  });

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("form").reset();
    alert("All changes have been canceled.");
  });

  const accountTypeRadios = document.querySelectorAll(
    "input[name='accountType']"
  );
  accountTypeRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      console.log(
        `Selected Account Type: ${e.target.parentElement.textContent.trim()}`
      );
    });
  });

  const socialIcons = document.querySelectorAll(".social-icons i");
  socialIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      alert(`Redirecting to: ${icon.className.split(" ")[1]} page.`);
    });
  });
});
