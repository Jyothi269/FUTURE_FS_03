// ===============================
// 1. DARK MODE TOGGLE
// ===============================
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkModeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkModeBtn.textContent = "🌙";
  }
});


// ===============================
// 2. COUNTER ANIMATION (STATS)
// ===============================
const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  // start animation when page loads
  updateCount();
});


// ===============================
// 3. FAQ TOGGLE (ACCORDION)
// ===============================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".faq-btn");

  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


// ===============================
// 4. CONTACT FORM VALIDATION
// ===============================
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");

  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      isValid = false;
    }
  });

  if (!isValid) {
    alert("Please fill all fields!");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
});


// ===============================
// 5. SMOOTH SCROLL FOR NAV LINKS
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
// ===============================
// WHATSAPP DYNAMIC LINK
// ===============================
const whatsappBtn = document.getElementById("whatsappBtn");

const phone = "6305864889";
const msg = "Hello! I want to order a cake from Jyothi Sweet Treat Bakery.";

whatsappBtn.href =
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

// ===============================
// STICKY HEADER EFFECT
// ===============================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});