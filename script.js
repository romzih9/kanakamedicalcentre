const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      // prevent default anchor behavior
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          menuOpenButton.click(); // close menu AFTER scroll starts
        }, 500); // adjust if needed
      }
    } else {
      // allow normal links to proceed
      menuOpenButton.click();
    }
  });
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");


// Open modal when image is clicked
document.querySelectorAll('.modal-trigger').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = img.dataset.full || img.src;
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});