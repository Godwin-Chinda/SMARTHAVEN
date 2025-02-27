document.addEventListener("DOMContentLoaded", function () {
  // Tab Switching Functionality
  const tabs = document.querySelectorAll(".tabs button");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Search Bar Functionality
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-btn");

  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log(`Searching for: ${searchTerm}`);
    } else {
      alert("Please enter a location to search.");
    }
  });

  // Filter Search Functionality
  const filterInputs = document.querySelectorAll(".filters input");

  filterInputs.forEach((input) => {
    input.addEventListener("change", function () {
      console.log(`${this.id}: ${this.value}`);
    });
  });

  // Navigation Links Hover Effect
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.color = "#FFD700";
    });

    link.addEventListener("mouseleave", function () {
      this.style.color = "#FFF";
    });
  });
});
