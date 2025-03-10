// Cuisine data (9 cuisines for 3x3 grid)
const cuisines = [
  { name: "Indian", image: "https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/33a0e76c-d670-4bd8-b150-64b450896b99/Delicious+food.png?format=2500w" },
  {
    name: "Turkish",
    image: "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2020/09/bigstock-Traditional-Turkish-Dishes-198979441.jpg",
  },
  {
    name: "Pakistani",
    image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64775850e18405001d8c1e02.jpg",
  },
  {
    name: "Italian",
    image: "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
  },

  {
    name: "Chinese",
    image: "https://images.jdmagicbox.com/v2/comp/hyderabad/s4/040pxx40.xx40.200331210224.a3s4/catalogue/chung-hua-since-1983-kondapur-hyderabad-sea-food-delivery-restaurants-01wt82gzhu.jpg",
  },
  {
    name: "American",
    image: "https://www.belmarrahealth.com/wp-content/uploads/2023/02/American-Food-Is-Unhealthy-Feb-13-AM-1024x682.jpg",
  },
  
  {
    name: "Mexican",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b6/8a/b1/tantalizing-taste-buds.jpg?w=1800&h=1000&s=1",
  },
  {
    name: "Japanese",
    image: "https://www.kikkoman.co.uk/fileadmin/_processed_/4/d/csm_UK-Blog_Guideto-JapaneseFood_Header_Desktop_fc60b6de2b.webp",
  },
  
  { name: "Thai",
    image: "https://images.squarespace-cdn.com/content/v1/5519b37ae4b03cc5bf12c79e/1716275481977-YA2EXE6Y4JZ3BJWKJKND/TK907494.jpg?format=1500w" },
];

// Tagline transition
// const taglines = document.querySelectorAll(".tagline");
// let currentTagline = 0;

// function showNextTagline() {
//   taglines[currentTagline].classList.remove("active");
//   currentTagline = (currentTagline + 1) % taglines.length;
//   taglines[currentTagline].classList.add("active");
// }

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


