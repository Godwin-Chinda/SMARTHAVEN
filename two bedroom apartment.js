document.addEventListener("DOMContentLoaded", function () {
  // Show/Hide Phone Numbers
  document.querySelectorAll(".show-phone").forEach((button) => {
    button.addEventListener("click", function () {
      let phoneText = this.previousElementSibling;
      if (phoneText.textContent.includes("XXXX")) {
        phoneText.textContent = "Call 08066501996"; // Replace with actual number
        this.textContent = "Hide Phone";
      } else {
        phoneText.textContent = "Call 0806 XXXX";
        this.textContent = "Show Phone";
      }
    });
  });

  // Image Carousel
  let images = [
    "Images/Picture/2bed.png",
    "Images/Picture/2bed 1.png",
    "Images/Picture/2bed 2.png",
    "Images/Picture/2bed 3.png",
    "Images/Picture/2bed 4.png",
  ];
  let currentIndex = 0;
  const mainImage = document.querySelector(".property-image img");
  document.querySelector(".prev-button").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentIndex];
  });
  document.querySelector(".next-button").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
  });

  // Thumbnail Click Event
  document
    .querySelectorAll(".property-thumbnails img")
    .forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", function () {
        currentIndex = index;
        mainImage.src = images[currentIndex];
      });
    });

  // Save Property Feature
  document
    .querySelector(".save-section")
    .addEventListener("click", function () {
      if (this.textContent === "Save") {
        this.textContent = "Saved";
        this.style.color = "green";
      } else {
        this.textContent = "Save";
        this.style.color = "black";
      }
    });

  // Form Submission
  document
    .querySelector(".search-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      alert("Search submitted!");
    });
});
