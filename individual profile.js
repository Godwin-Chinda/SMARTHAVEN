document.addEventListener("DOMContentLoaded", function () {
  const accountCheckboxes = document.querySelectorAll(
    "input[name='accountType']"
  );
  const form = document.querySelector("form");
  const saveBtn = document.querySelector(".save-btn");
  const cancelBtn = document.querySelector(".cancel-btn");

  // Ensure only one account type can be selected
  accountCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      accountCheckboxes.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
    });
  });

  // Handle form submission (saving data)
  saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !email || !phone) {
      alert("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    // Simulate saving (You can replace this with an actual API call)
    alert("Profile saved successfully!");
  });

  // Reset form when Cancel is clicked
  cancelBtn.addEventListener("click", function () {
    form.reset();
  });
});
