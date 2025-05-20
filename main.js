const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const supportBtn = document.getElementById("support-btn");
const supportContent = document.getElementById("support-content");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.querySelector(".close-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const themeToggle = document.getElementById("theme-toggle");

let cart = [];

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

supportBtn.addEventListener("click", () => {
  supportContent.style.display = supportContent.style.display === "block" ? "none" : "block";
});

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
  updateCart();
});

closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const model = button.getAttribute("data-model");
    const price = parseFloat(button.getAttribute("data-price"));
    const item = { model, price };
    cart.push(item);
    updateCartCount();
  });
});

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const itemElement = document.createElement("p");
    itemElement.textContent = `Model: ${item.model} - $${item.price}`;
    cartItems.appendChild(itemElement);
    total += item.price;
  });
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__image__content ", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".product__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 250,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});