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
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", (e) => {
  mobileMenu.classList.remove("active");
  closeButton.style.display = "none";
  humburgerButton.classList.add("hum-active");
});

// ACTIVE COLOR ON ACTIVE NAV LINKS

const dektopMenu = document.querySelector('.desktop-menu')


dektopMenu.addEventListener(('click'), (e) => {
    
    if(e.target.classList == 'nav-link'){
    
        const allNavLinks = dektopMenu.querySelectorAll('.nav-link');

        allNavLinks.forEach((currNavLink) => {
            currNavLink.classList.remove('change-nav-link-color');
        })

        e.target.classList.add('change-nav-link-color');
        
        
    }

    
})
