document.addEventListener("DOMContentLoaded", function () {
  // Format currency inputs
  document.querySelectorAll(".currency-input").forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  });

  // Validate form fields before submission
  function validateForm() {
    const requiredFields = document.querySelectorAll(
      "input[type='text']:not(.optional)"
    );
    let isValid = true;

    requiredFields.forEach((field) => {
      if (field.value.trim() === "") {
        field.style.border = "1px solid red";
        isValid = false;
      } else {
        field.style.border = "";
      }
    });

    return isValid;
  }

  // Handle Save as Draft button
  document.querySelector(".btn.draft").addEventListener("click", function () {
    alert("Tenancy agreement saved as draft.");
  });

  // Handle Save and Preview Document button
  document.querySelector(".btn.preview").addEventListener("click", function () {
    if (validateForm()) {
      alert("Previewing document...");
      // Logic to generate and preview document goes here
    } else {
      alert("Please fill in all required fields.");
    }
  });

  // Handle Create & Pay button
  document.querySelector(".btn.pay").addEventListener("click", function () {
    if (validateForm()) {
      alert("Proceeding to payment...");
      // Logic for payment integration goes here
    } else {
      alert("Please complete all required fields before proceeding.");
    }
  });
});
