document.addEventListener("DOMContentLoaded", function () {
  const savedProperties =
    JSON.parse(localStorage.getItem("savedProperties")) || [];
  const saveButtons = document.querySelectorAll(".save-btn");
  const searchButton = document.querySelector(".search-btn");

  // Function to save property
  function saveProperty(propertyCard) {
    const propertyDetails = {
      title: propertyCard.querySelector("h3").innerText,
      category: propertyCard.querySelector(".category").innerText,
      price: propertyCard.querySelector(".price").innerText,
      image: propertyCard.querySelector(".property-image").src,
      location:
        propertyCard.querySelector(".location")?.innerText ||
        "Location not specified",
    };

    const isAlreadySaved = savedProperties.some(
      (prop) => prop.title === propertyDetails.title
    );

    if (!isAlreadySaved) {
      savedProperties.push(propertyDetails);
      localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
      alert(`${propertyDetails.title} has been saved.`);
    } else {
      alert("Property is already saved.");
    }
  }

  // Add event listeners to save buttons
  saveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const propertyCard = this.closest(".property-card");
      saveProperty(propertyCard);
    });
  });

  // Property filtering logic
  function filterProperties() {
    const locationFilter = document
      .getElementById("location")
      .value.toLowerCase();
    const categoryFilter = document
      .getElementById("category")
      .value.toLowerCase();
    const bedroomsFilter = document.getElementById("bedrooms").value;
    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;

    document.querySelectorAll(".property-card").forEach((propertyCard) => {
      const location =
        propertyCard.querySelector(".location")?.innerText.toLowerCase() || "";
      const category = propertyCard
        .querySelector(".category")
        .innerText.toLowerCase();
      const bedrooms =
        propertyCard
          .querySelector(".property-features span")
          .innerText.match(/\d+/)?.[0] || 0;
      const price = propertyCard
        .querySelector(".price")
        .innerText.replace(/\D/g, "");

      let isVisible = true;

      if (locationFilter && !location.includes(locationFilter))
        isVisible = false;
      if (categoryFilter && !category.includes(categoryFilter))
        isVisible = false;
      if (bedroomsFilter && parseInt(bedrooms) !== parseInt(bedroomsFilter))
        isVisible = false;
      if (minPrice && parseInt(price) < parseInt(minPrice)) isVisible = false;
      if (maxPrice && parseInt(price) > parseInt(maxPrice)) isVisible = false;

      propertyCard.style.display = isVisible ? "block" : "none";
    });
  }

  // Attach filter function to search button
  searchButton.addEventListener("click", filterProperties);
});
