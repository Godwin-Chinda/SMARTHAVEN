document.addEventListener("DOMContentLoaded", function () {
  // Notification Close Button
  const notification = document.querySelector(".notification");
  const closeBtn = document.querySelector(".close-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      notification.style.display = "none";
    });
  }

  // Dashboard Card Hover Animation
  const cards = document.querySelectorAll(".dashboard-card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    });
  });

  // Dynamic Greeting Message
  const dashboardHeader = document.querySelector(".dashboard-header h2");
  const currentHour = new Date().getHours();
  let greeting = "Welcome to Your Dashboard";

  if (currentHour < 12) {
    greeting = "Good Morning, Landlord!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon, Landlord!";
  } else {
    greeting = "Good Evening, Landlord!";
  }

  if (dashboardHeader) {
    dashboardHeader.textContent = greeting;
  }

  // Responsive Navigation Menu (if applicable)
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
