// Cuisine data (9 cuisines for 3x3 grid)
const cuisines = [
  {
    name: "Chinese",
    image: "https://via.placeholder.com/250x140?text=Chinese",
  },
  {
    name: "Italian",
    image: "https://via.placeholder.com/250x140?text=Italian",
  },
  { name: "Indian", image: "https://via.placeholder.com/250x140?text=Indian" },
  {
    name: "Mexican",
    image: "https://via.placeholder.com/250x140?text=Mexican",
  },
  {
    name: "Japanese",
    image: "https://via.placeholder.com/250x140?text=Japanese",
  },
  { name: "Thai", image: "https://via.placeholder.com/250x140?text=Thai" },
  {
    name: "American",
    image: "https://via.placeholder.com/250x140?text=American",
  },
  {
    name: "Mediterranean",
    image: "https://via.placeholder.com/250x140?text=Mediterranean",
  },
  {
    name: "Pakistani",
    image: "https://via.placeholder.com/250x140?text=Pakistani",
  },
];

// Tagline transition
const taglines = document.querySelectorAll(".tagline");
let currentTagline = 0;

function showNextTagline() {
  taglines[currentTagline].classList.remove("active");
  currentTagline = (currentTagline + 1) % taglines.length;
  taglines[currentTagline].classList.add("active");
}

// Display cuisine cards
function displayCuisines() {
  const container = document.getElementById("cuisine-container");
  cuisines.forEach((cuisine) => {
    const card = document.createElement("div");
    card.classList.add("cuisine-card");
    card.innerHTML = `
        <img src="${cuisine.image}" alt="${cuisine.name}">
        <h3>${cuisine.name}</h3>
      `;
    container.appendChild(card);
  });
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide up arrow based on scroll
function toggleUpArrow() {
  const arrow = document.getElementById("up-arrow");
  if (window.scrollY > 300) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Toggle body overflow to disable/enable scrolling
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// Close menu when clicking a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  displayCuisines();
  taglines[currentTagline].classList.add("active"); // Show first tagline
  setInterval(showNextTagline, 3000); // Change tagline every 3 seconds

  // Placeholder search functionality
  document.querySelector(".search-btn").addEventListener("click", () => {
    const query = document.querySelector(".search-box input").value;
  });

  // Add scroll event listener for up arrow
  window.addEventListener("scroll", toggleUpArrow);
});

const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
