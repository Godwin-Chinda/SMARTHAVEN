document.addEventListener("DOMContentLoaded", function () {
  // Function to save property
  function toggleSave(event) {
    const button = event.target;
    if (button.classList.contains("saved")) {
      button.textContent = "Save";
      button.classList.remove("saved");
    } else {
      button.textContent = "Saved";
      button.classList.add("saved");
    }
  }

  // Add event listeners to save buttons
  document.querySelectorAll(".save-btn").forEach((button) => {
    button.addEventListener("click", toggleSave);
  });

  // Property filtering logic
  document.querySelector(".search-btn").addEventListener("click", function () {
    const location = document.querySelector("#location").value.toLowerCase();
    const category = document.querySelector("#category").value.toLowerCase();
    const minPrice =
      parseFloat(document.querySelector("#min-price").value) || 0;
    const maxPrice =
      parseFloat(document.querySelector("#max-price").value) || Infinity;

    document.querySelectorAll(".property-card").forEach((card) => {
      const propertyLocation = card
        .querySelector(".location")
        .textContent.toLowerCase();
      const propertyCategory = card
        .querySelector(".category")
        .textContent.toLowerCase();
      const propertyPrice =
        parseFloat(
          card.querySelector(".price").textContent.replace(/[^0-9]/g, "")
        ) || 0;

      const matchesLocation =
        location === "" || propertyLocation.includes(location);
      const matchesCategory =
        category === "" || propertyCategory.includes(category);
      const matchesPrice =
        propertyPrice >= minPrice && propertyPrice <= maxPrice;

      if (matchesLocation && matchesCategory && matchesPrice) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
