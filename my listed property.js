// my listed property.js

// Function to handle the filter form submission
document
  .querySelector(".filter-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const state = document.getElementById("state").value.trim();
    const locality = document.getElementById("locality").value.trim();
    const category = document.getElementById("category").value.trim();
    const type = document.getElementById("type").value.trim();
    const featured = document.getElementById("featured").value.trim();
    const status = document.getElementById("status").value.trim();
    const totalArea = document.getElementById("total-area").value.trim();
    const propertyRef = document.getElementById("property-ref").value.trim();
    const dateAdded = document.getElementById("date-added").value;
    const dateBoosted = document.getElementById("date-boosted").value;
    const keywords = document.getElementById("keywords").value.trim();

    // Validate the input fields (basic example)
    if (
      !state &&
      !locality &&
      !category &&
      !type &&
      !featured &&
      !status &&
      !totalArea &&
      !propertyRef &&
      !dateAdded &&
      !dateBoosted &&
      !keywords
    ) {
      alert("Please fill at least one field to filter.");
      return;
    }

    // Display the filter criteria in the console (for demonstration purposes)
    console.log("Filter Criteria:", {
      state,
      locality,
      category,
      type,
      featured,
      status,
      totalArea,
      propertyRef,
      dateAdded,
      dateBoosted,
      keywords,
    });

    // Here you can add your logic to filter the listings based on the criteria
    // For demonstration, we'll simulate filtering by showing a message
    const resultsContainer = document.querySelector(".results");
    const noResultsContainer = document.querySelector(".no-results");

    // Simulate filtering logic (replace this with actual filtering logic)
    const hasResults = Math.random() > 0.5; // Randomly simulate having results

    if (hasResults) {
      resultsContainer.innerHTML = `<p><strong>Results for your search criteria:</strong></p>
                                       <p>State: ${state}</p>
                                       <p>Locality: ${locality}</p>
                                       <p>Category: ${category}</p>
                                       <p>Type: ${type}</p>
                                       <p>Featured: ${featured}</p>
                                       <p>Status: ${status}</p>
                                       <p>Total Area: ${totalArea}</p>
                                       <p>Property Ref: ${propertyRef}</p>
                                       <p>Date Added: ${dateAdded}</p>
                                       <p>Date Boosted: ${dateBoosted}</p>
                                       <p>Keywords: ${keywords}</p>`;
      resultsContainer.style.display = "block";
      noResultsContainer.style.display = "none";
    } else {
      resultsContainer.style.display = "none";
      noResultsContainer.style.display = "block";
    }
  });

// Function to handle the "Try it Now!" button click
document
  .querySelector(".tenancy-agreement button")
  .addEventListener("click", function () {
    alert("Redirecting to the Tenancy Agreement creation page...");
    // Here you can redirect to the actual page for creating a tenancy agreement
    // window.location.href = 'tenancy-agreement.html'; // Example redirect
  });

// Function to handle the "Pay Online" button click
document.querySelector(".pay-online").addEventListener("click", function () {
  alert("Redirecting to the payment page...");
  // Here you can redirect to the actual payment page
  // window.location.href = 'payment.html'; // Example redirect
});

// Function to toggle the visibility of the no-results message
function toggleNoResultsMessage() {
  const resultsContainer = document.querySelector(".results");
  const noResultsContainer = document.querySelector(".no-results");

  // Initially hide the no-results message
  noResultsContainer.style.display = "none";
}

// Call the function to check for results on page load
toggleNoResultsMessage();
