// setting-up Preloader (script)
let loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}

// Navbar Section
let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menuToggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "400px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

const wrapper = document.querySelector(".sliderWrapper");

const menuItem = document.querySelectorAll(".menuItems");

const products = [
  {
    id: 1,
    title: "GUCCI",
    price: 119,
    colors: [
      {
        code: "black",
        img: "bag-images/black-gucci-set (1)-limited.png",
      },
      {
        code: "burlywood",
        img: "bag-images/black-gucci-set (2)-limited.png",
      },
    ],
  },
  {
    id: 2,
    title: "CHANEL",
    price: 149,
    colors: [
      {
        code: "black",
        img: "bag-images/chanel-sets-black-limited.png",
      },
      {
        code: "pink",
        img: "bag-images/Chanel-Sets-Of-4-Mini_s-Bags-5-pink-limited.png",
      },
    ],
  },
  {
    id: 3,
    title: "Louis-Vuitton",
    price: 109,
    colors: [
      {
        code: "brown",
        img: "bag-images/louis-vuitton-travel-set.png",
      },
      {
        code: "purple",
        img: "bag-images/louis-vuitton-purple.png ",
      },
    ],
  },
  {
    id: 4,
    title: "D&G",
    price: 129,
    colors: [
      {
        code: "black",
        img: "bag-images/leather-business-travel-bag-black(1).png",
      },
      {
        code: "brown",
        img: "bag-images/d&g-brown(2).png",
      },
    ],
  },
  {
    id: 5,
    title: "Prada",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "bag-images/prada-white(2).png",
      },
      {
        code: "black",
        img: "bag-images/luggage-sizes-prada-men-black.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
