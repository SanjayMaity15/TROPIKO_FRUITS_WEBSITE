import "./style.css";

import productData from "./api/card-item.json";

// MOBILE MENU ACTIVE AND CLOSE

const humburgerButton = document.querySelector(".humburger");

const mobileMenu = document.querySelector(".mobile-menu");

const closeButton = document.querySelector(".mb-menu-close-btn");

humburgerButton.addEventListener("click", (e) => {
  mobileMenu.classList.add("active");
  humburgerButton.style.display = "none";
  humburgerButton.classList.remove("hum-active");
  closeButton.classList.add("appear");
});

closeButton.addEventListener("click", (e) => {
  mobileMenu.classList.remove("active");
  closeButton.classList.remove("appear");
  humburgerButton.classList.add("hum-active");
});

// ACTIVE COLOR ON ACTIVE NAV LINKS

// FOR DESKTOP MENU
const dektopMenu = document.querySelector(".desktop-menu");

dektopMenu.addEventListener("click", (e) => {
  if (e.target.classList == "nav-link") {
    const allNavLinks = dektopMenu.querySelectorAll(".nav-link");

    allNavLinks.forEach((currNavLink) => {
      currNavLink.classList.remove("change-nav-link-color");
    });

    e.target.classList.add("change-nav-link-color");
  }
});

// FOR MOBILE MENU

mobileMenu.addEventListener("click", (e) => {
  if (e.target.classList == "nav-link") {
    const allNavLinks = mobileMenu.querySelectorAll(".nav-link");

    allNavLinks.forEach((currNavLink) => {
      currNavLink.classList.remove("change-nav-link-color");
    });

    e.target.classList.add("change-nav-link-color");
  }
});


