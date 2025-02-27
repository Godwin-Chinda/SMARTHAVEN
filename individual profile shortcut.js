document.addEventListener("DOMContentLoaded", function () {
  // Close notification
  const notification = document.querySelector(".notification");
  const closeBtn = document.querySelector(".close-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      notification.style.display = "none";
    });
  }

  // Add active class to dashboard menu
  const dashboardMenuLinks = document.querySelectorAll(".dashboard-menu a");

  dashboardMenuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      dashboardMenuLinks.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Hover effect to cards
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Handle Learn More button
  const learnMoreBtn = document.querySelector(".footer-column button");

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
      alert("Learn more about SmartHaven coming soon!");
    });
  }
});
