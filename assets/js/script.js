// Hamburger menu functionality
const hamburgerMenu = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") &&
    !e.target.closest(".mobile-menu") &&
    !e.target.closest(".hamburger")
  ) {
    hamburgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Form submission with modern feedback
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const button = this.querySelector(".submit-button");
  const originalText = button.textContent;

  // Simulate sending
  button.textContent = "Sending...";
  button.style.opacity = "0.7";

  setTimeout(() => {
    button.textContent = "Message Sent!";
    button.style.background =
      "linear-gradient(135deg, #00d4ff 0%, #8338ec 100%)";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.opacity = "1";
      button.style.background = "";
      this.reset();
    }, 2000);
  }, 1500);
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (hero && heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Dynamic gradient animation
const orbs = document.querySelectorAll(".bg-orb");
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateOrbs() {
  orbs.forEach((orb, index) => {
    const rect = orb.getBoundingClientRect();
    const orbX = rect.left + rect.width / 2;
    const orbY = rect.top + rect.height / 2;

    const deltaX = (mouseX - orbX) * 0.02;
    const deltaY = (mouseY - orbY) * 0.02;

    orb.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  requestAnimationFrame(animateOrbs);
}

animateOrbs();

// Gallery item click effects
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Create ripple effect
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s ease-out";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.width = "100px";
    ripple.style.height = "100px";
    ripple.style.marginLeft = "-50px";
    ripple.style.marginTop = "-50px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation keyframes
const style = document.createElement("style");
style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
document.head.appendChild(style);

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
