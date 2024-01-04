
// Function to filter and display course cards based on search input
function filterCourses(searchTerm) {
  const cards = document.querySelectorAll(".card"); // Select all course cards

  cards.forEach((card) => {
    const cardTitle = card.querySelector("h3").textContent.toLowerCase(); // Get the course title

    // Check if the card's title includes the search term
    if(cardTitle.includes(searchTerm.toLowerCase())) {
      card.style.display = "block"; // Display the card if it matches the search term
    } else {
      card.style.display = "none"; // Hide the card if it doesn't match the search term
    }
  });
}

// Function to hide all course cards
function hideAllCourses() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "none";
  });
}

// Event listener for search input changes
document
  .getElementById("searchInput")
  .addEventListener("input", function(event) {
    const searchTerm = event.target.value.trim();

    if(searchTerm === "") {
      hideAllCourses(); // If search box is cleared, hide all the course cards
    } else {
      filterCourses(searchTerm); // If there's a search term, filter and display course cards
    }
  });

// Hide all course cards when the page finishes loading
window.addEventListener("load", function() {
  hideAllCourses();
});


const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const comment = document.getElementById("comment").value;
  // Here you would send the comment via email notification using JavaScript's fetch or other backend methods.
  // For simplicity, I'll simulate sending the email notification.
  console.log(`Received comment: ${comment}`);
  console.log("Email notification sent (simulated).");
  alert("Thank you for your comment! You'll be notified via email.");
  feedbackForm.reset();
});


function toggleDarkMode() {
  console.log("Toggling dark mode");
  const body = document.body;
  const isDarkMode = body.classList.contains("dark");

  if(isDarkMode) {
    body.classList.remove("dark");
    restoreColors();
  } else {
    body.classList.add("dark");
    applyDarkMode();
  }
}

function applyDarkMode() {
  const darkElements = document.querySelectorAll(
    "body, button, a, header, footer, nav"
  );
  darkElements.forEach((element) => {
    element.classList.add("dark-mode");
  });
}

function restoreColors() {
  const darkElements = document.querySelectorAll(
    "body, button, a, header, footer, nav"
  );
  darkElements.forEach((element) => {
    element.classList.remove("dark-mode");
  });
}





// Get the elements by id
var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");
var languageList = document.getElementById("languageList");
var items = document.querySelectorAll(".item");

// Add click event listeners to the buttons
leftButton.addEventListener("click", function() {
  // Scroll the list to the left by 20% of its width
  languageList.scrollLeft -= languageList.offsetWidth * 0.2;
});

rightButton.addEventListener("click", function() {
  // Scroll the list to the right by 20% of its width
  languageList.scrollLeft += languageList.offsetWidth * 0.2;
});

items.forEach(function(item) {
  item.addEventListener("click", function() {
    // Remove 'active' class from all items
    items.forEach(function(el) {
      el.classList.remove("active");
    });
    // Add 'active' class to the clicked item
    item.classList.add("active");
  });
});