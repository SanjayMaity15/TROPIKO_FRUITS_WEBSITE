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


// UPDATE THE FINAL TOTAL
const totalPrice = document.querySelector('.total-price');

    const updateFinalTotal = () => {
        let finalTotalPrice = 0;
        let allItemsInCart = document.querySelectorAll('.item');
        allItemsInCart.forEach((currItem) => {
            let price = currItem.querySelector('.item-price').textContent.replace("₹", "");

            price = Number(price);
            finalTotalPrice += price;
        })

        totalPrice.textContent = `Total : ₹${finalTotalPrice}`

    }


// ADD TO CART FUNCTIONALITY

let cartItemList = [];

const cartItems = document.querySelector(".cart-items");

const addToCartFunc = (currProd) => {
  let quantity = 1;
  const { id, name, price, about_fruit, image } = currProd;

  const existingProduct = cartItemList.find((currCartItem) => {
    return currCartItem.id === id;
  });

  if (existingProduct) {
    alert(`The ${name} is already in cart`);
    return;
  }

  cartItemList.push(currProd);

  const cartValue = document.querySelector('.cart-value');
  cartValue.textContent = cartItemList.length;

  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
        
            <img src="${image}" alt="">
            <div class="item-about">
              <p class="item-name">${name}</p>
              <p class="item-price">₹${price}</p>
            </div>
            <div class="qty-update-box">
              <a href="#" class="decrement">
                <i class="fa-solid fa-minus"></i>
              </a>
              <span class="item-qty">${quantity}kg</span>
              <a href="#" class="increment">
                <i class="fa-solid fa-plus"></i>
              </a>
            </div>
        
        
        `;

  cartItems.appendChild(item);
  updateFinalTotal()


// QUANTITY INCREMENT AND DECREMENT


  const maxQuantity = 10;
  const incrementButton = item.querySelector(".increment");
  const decrementButton = item.querySelector(".decrement");
  const itemQuantity = item.querySelector(".item-qty");
  const itemPrice = item.querySelector('.item-price')

  incrementButton.addEventListener("click", () => {
    if (quantity < maxQuantity) {
      quantity++;
      itemQuantity.textContent = `${quantity}kg`;
      itemPrice.textContent = `₹${price * quantity}`;
      updateFinalTotal()
    }else{
        alert(`Maximum limit reach ${maxQuantity}`)
    }
  });

  decrementButton.addEventListener('click', () => {
    if(quantity > 1){
        quantity--;
        itemQuantity.textContent = `${quantity}kg`;
        itemPrice.textContent = `₹${(price * quantity)}`;
        updateFinalTotal()
    }else{
        alert('Wnat to delete item');
        item.remove()
        cartItemList = cartItemList.filter((currCartItem) => {
            return currCartItem.id !== id
        })
        cartValue.textContent = cartItemList.length;
        updateFinalTotal()
    }
  })

};

// DYNAMICALLY ADD PRODUCT

const fruitBuyingCardContainer = document.querySelector(
  ".fruit-buying-card-container"
);

const displayProduct = () => {
  productData.forEach((currProd) => {
    const { id, name, price, about_fruit, image } = currProd;

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        
        <div class="product-content">
            <h4 class="fruit-name">${name}</h4>
            <p class="fruit-desc">${about_fruit}</p>
            <p class="fruit-price">Price : ₹${price} kg</p>
            <button class="add-to-cart btn">
              Add to cart
            </button>
          </div>

          <div class="product-image">
            <img src="${image}">
          </div>
        
        
        `;

    fruitBuyingCardContainer.appendChild(productCard);

    const addToCartButton = productCard.querySelector(".add-to-cart");

    addToCartButton.addEventListener("click", () => {
      addToCartFunc(currProd);
    });
  });
};

displayProduct();

// Swiper js slide

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ACTIVE AND CLOSE CART TAB

const cartTab = document.querySelector(".cart-tab");
const cartTabButton = document.querySelector(".cart-tab-btn");
const cartCloseButton = document.querySelector(".close");

cartTabButton.addEventListener("click", () => {
  cartTab.classList.add("cart-tab-active");
});

cartCloseButton.addEventListener("click", () => {
  cartTab.classList.remove("cart-tab-active");
});
