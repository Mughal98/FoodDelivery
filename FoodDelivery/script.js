// Cuisine data (9 cuisines for 3x3 grid)
const cuisines = [
  {
    name: "Indian",
    image:
      "https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/33a0e76c-d670-4bd8-b150-64b450896b99/Delicious+food.png?format=2500w",
  },
  {
    name: "Turkish",
    image:
      "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2020/09/bigstock-Traditional-Turkish-Dishes-198979441.jpg",
  },
  {
    name: "Pakistani",
    image:
      "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64775850e18405001d8c1e02.jpg",
  },
  {
    name: "Italian",
    image:
      "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
  },

  {
    name: "Chinese",
    image:
      "https://images.jdmagicbox.com/v2/comp/hyderabad/s4/040pxx40.xx40.200331210224.a3s4/catalogue/chung-hua-since-1983-kondapur-hyderabad-sea-food-delivery-restaurants-01wt82gzhu.jpg",
  },
  {
    name: "American",
    image:
      "https://www.belmarrahealth.com/wp-content/uploads/2023/02/American-Food-Is-Unhealthy-Feb-13-AM-1024x682.jpg",
  },

  {
    name: "Mexican",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b6/8a/b1/tantalizing-taste-buds.jpg?w=1800&h=1000&s=1",
  },
  {
    name: "Japanese",
    image:
      "https://www.kikkoman.co.uk/fileadmin/_processed_/4/d/csm_UK-Blog_Guideto-JapaneseFood_Header_Desktop_fc60b6de2b.webp",
  },

  {
    name: "Thai",
    image:
      "https://images.squarespace-cdn.com/content/v1/5519b37ae4b03cc5bf12c79e/1716275481977-YA2EXE6Y4JZ3BJWKJKND/TK907494.jpg?format=1500w",
  },
];

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

// Add scroll event listener to change header color
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 370) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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
  // Placeholder search functionality
  document.querySelector(".search-btn").addEventListener("click", () => {
    const query = document.querySelector(".search-box input").value;
  });

  // Add scroll event listener for up arrow
  window.addEventListener("scroll", toggleUpArrow);
});

const navigation = document.querySelector(".primary-navigation");

// Initialize slider on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  displayCuisines();
  // ... (keep your other initialization code) ...
  updateCardWidth(); // Ensure correct initial sizing
});

//----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const sliderContainer = document.querySelector(".slider-container");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let cards = document.querySelectorAll(".category-card");

  let currentIndex = 0;
  let cardWidth = cards[0].offsetWidth + 20; // Card width + total margin (10px each side)
  let isAnimating = false;
  let touchStartX = 0;
  let touchCurrentX = 0;
  let autoSlideInterval;
  const cardsPerSet = cards.length; // Original number of cards

  // Array of background images tied to specific categories
  const cardImages = [
    'url("https://expatliving.sg/wp-content/uploads/2025/02/Little-Farms-Vegetarian-food-singapore-768x576.jpg")', // Vegetarian
    'url("https://assets.zeezest.com/blogs/PROD_Banner_1662611614463_thumb_1200.jpeg?w=1200&q=75&fm=webp")', // Non-Vegetarian
    'url("https://www.momswhothink.com/wp-content/uploads/2024/11/shutterstock-2502919571-huge-licensed-scaled.jpg")', // Fast Food
    'url("https://www.shutterstock.com/image-photo/grilled-meat-steak-on-stainless-600nw-2203020861.jpg")', // BBQ
    'url("https://5.imimg.com/data5/ANDROID/Default/2024/5/422808797/WR/SM/LZ/143729871/product-jpeg-1000x1000.jpg")', // Desi
    'url("https://b.zmtcdn.com/data/pictures/8/19565908/7e14844611cb8df6cf612ed3c914f21d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*")', // Salad
    'url("https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-10-1024x768.jpg")', // Desserts
    'url("https://d4t7t8y8xqo0t.cloudfront.net/app/resized/600X350/group%2F381%2Fbigstock-Fresh-Blueberry-And-Strawberry-38483941.jpg")', // Beverages
  ];

  // Assign background images to original cards
  cards.forEach((card, i) => {
    card.style.setProperty("--bg-image", cardImages[i]);
  });

  // Create multiple sets of clones for seamless looping (3 sets total: before, original, after)
  const originalCards = Array.from(cards);
  for (let i = 0; i < 2; i++) {
    originalCards.forEach((card, index) => {
      const clone = card.cloneNode(true);
      clone.style.setProperty("--bg-image", cardImages[index]);
      slider.appendChild(clone);
    });
  }

  // Update cards after cloning
  cards = document.querySelectorAll(".category-card");
  const totalSlides = cards.length;

  // Center calculation
  const centerOffset = () => {
    const containerWidth = sliderContainer.offsetWidth;
    return (containerWidth - cardWidth) / 2;
  };

  // Initial position (start in the middle set)
  currentIndex = cardsPerSet; // Start at the beginning of the original set
  slider.style.transform = `translateX(${
    -cardWidth * currentIndex + centerOffset()
  }px)`;

  // Slide function
  function slideTo(index, instant = false) {
    if (isAnimating && !instant) return;

    isAnimating = true;
    slider.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
    const translateX = -index * cardWidth + centerOffset();
    slider.style.transform = `translateX(${translateX}px)`;

    if (!instant) {
      slider.addEventListener("transitionend", handleTransitionEnd, {
        once: true,
      });
    } else {
      handleTransitionEnd();
    }
  }

  // Handle transition end for seamless looping
  function handleTransitionEnd() {
    isAnimating = false;
    // If we reach the last set, jump back to the original set instantly
    if (currentIndex >= totalSlides - cardsPerSet) {
      currentIndex = cardsPerSet;
      slideTo(currentIndex, true);
    }
    // If we reach the first set, jump to the second-to-last set instantly
    else if (currentIndex < cardsPerSet) {
      currentIndex = totalSlides - cardsPerSet * 2;
      slideTo(currentIndex, true);
    }
  }

  // Auto-scroll every 3 seconds
  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentIndex++;
      slideTo(currentIndex);
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Button controls
  nextBtn.addEventListener("click", () => {
    if (!isAnimating) {
      currentIndex++;
      slideTo(currentIndex);
      stopAutoSlide();
      startAutoSlide();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (!isAnimating) {
      currentIndex--;
      slideTo(currentIndex);
      stopAutoSlide();
      startAutoSlide();
    }
  });

  // Touch controls
  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    slider.style.transition = "none";
    stopAutoSlide();
  });

  slider.addEventListener("touchmove", (e) => {
    touchCurrentX = e.touches[0].clientX;
    const diff = touchStartX - touchCurrentX;
    const currentTranslate = -currentIndex * cardWidth + centerOffset();
    slider.style.transform = `translateX(${currentTranslate - diff}px)`;
  });

  slider.addEventListener("touchend", () => {
    const diff = touchStartX - touchCurrentX;
    if (Math.abs(diff) > cardWidth / 3) {
      if (diff > 0) {
        currentIndex++;
      } else {
        currentIndex--;
      }
    }
    slideTo(currentIndex);
    startAutoSlide();
  });

  // Handle resize
  function updateCardWidth() {
    cardWidth = document.querySelector(".category-card").offsetWidth + 20;
    slideTo(currentIndex, true);
  }

  window.addEventListener("resize", debounce(updateCardWidth, 200));

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Start the slider
  startAutoSlide();
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
});
