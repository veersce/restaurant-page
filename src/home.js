import MainImage from "./main-image.png";
import Ramen1Image from "./ramen1.jpg";
import Ramen2Image from "./ramen2.jpg";
import Ramen3Image from "./ramen3.jpg";
import Ramen4Image from "./ramen4.jpg";

export function loadHomepage() {
  appendButtonsToNavbar();
  appendMainImage("ラーメン");
  appendBreakline("body");
  appendDiv("restaurant-description", "body");
  appendDiv("title", ".restaurant-description");
  appendHeader("A Taste of Japan", ".title");
  appendDiv("main-description", ".restaurant-description");
  appendBreakline(".main-description");
  appendParagraph(
    `Step into Ramen Haven, a sanctuary for ramen enthusiasts seeking the
            ultimate noodle experience. Our menu is a celebration of Japan's
            culinary heritage, featuring a diverse array of ramen bowls
            meticulously crafted to perfection. From rich tonkotsu to flavorful
            shoyu, each bowl is a harmonious blend of savory broth, springy
            noodles, and fresh toppings. Immerse yourself in the vibrant
            atmosphere of our restaurant, where the aroma of simmering broth and
            the buzz of satisfied diners create an unforgettable dining
            ambiance.`,
    ".main-description"
  );
  appendBreakline(".main-description");
  appendParagraph(
    `Join us and embark on a journey through the flavors of Japan, one
            tantalizing slurp at a time.`,
    ".main-description"
  );
  appendDiv("showcase", "body");
  appendToDiv(
    createDish(
      Ramen1Image,
      `Indulge in our authentic ramen bowls, a symphony of savory broth,
            chewy noodles, and fresh toppings. Satisfy your cravings with every
            slurp at our cozy eatery.`
    ),
    ".showcase"
  );
  appendToDiv(
    createDish(
      Ramen2Image,
      `Discover the soul-warming comfort of our signature ramen bowls,
            crafted with care and bursting with bold flavors. Dive into a bowl
            of perfection today!`
    ),
    ".showcase"
  );
  appendToDiv(
    createDish(
      Ramen3Image,
      `Treat your taste buds to an unforgettable journey through Japan with
            our tantalizing ramen creations. Each bowl promises a delightful
            blend of texture and taste.`
    ),
    ".showcase"
  );
  appendToDiv(
    createDish(
      Ramen4Image,
      `Experience the ultimate umami explosion with our mouthwatering ramen
            dishes. From rich tonkotsu to aromatic miso, our menu offers a taste
            of authentic Japanese comfort.`
    ),
    ".showcase"
  );
  appendFooter("ラーメン", "2024");
}

export function appendButtonsToNavbar() {
  appendButton("Home");
  appendButton("Menu");
  appendButton("Contact");
}

export function appendMainImage(name) {
  const image = new Image();
  image.src = MainImage;
  image.alt = "japanese cuisine";

  const contentDiv = document.querySelector("#content");
  let imageDiv = document.createElement("div");

  imageDiv.classList.add("main-image");
  contentDiv.append(imageDiv);

  imageDiv.append(image);
  appendRestaurantName(name);
}

function appendButton(buttonText) {
  let navbar = document.querySelector("nav");
  let button = document.createElement("button");
  button.innerHTML = `${buttonText}`;

  navbar.append(button);
}

function appendRestaurantName(name) {
  const mainImageDiv = document.querySelector(".main-image");
  let nameDiv = document.createElement("div");
  nameDiv.classList.add("restaurant-name");
  let h1 = document.createElement("h1");
  h1.innerHTML = `${name}`;
  nameDiv.append(h1);
  mainImageDiv.append(nameDiv);
}

export function appendBreakline(divName) {
  let br = document.createElement("br");
  appendToDiv(br, divName);
}

function appendDiv(className, divToAppendTo) {
  let divToWhichAppend = document.querySelector(`${divToAppendTo}`);
  let div = document.createElement("div");
  div.classList.add(`${className}`);
  divToWhichAppend.append(div);
}

export function appendToDiv(element, divName) {
  let selectedDiv = document.querySelector(`${divName}`);
  selectedDiv.append(element);
}

function appendHeader(text, divName) {
  let header = document.createElement("h1");
  header.textContent = text;
  appendToDiv(header, divName);
}

function appendParagraph(text, divName) {
  let p = document.createElement("p");
  p.textContent = text;
  appendToDiv(p, divName);
}

function createDish(imgSrc, text) {
  let dishDiv = document.createElement("div");
  dishDiv.classList.add("dish");

  let img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgSrc;
  dishDiv.append(img);

  let p = document.createElement("p");
  p.classList.add("description");
  p.textContent = text;

  dishDiv.append(p);
  return dishDiv;
}

export function appendFooter(text, year) {
  let footer = document.createElement("footer");
  footer.innerHTML = `<p>${text} &copy; ${year}</p>`;
  appendToDiv(footer, "body");
}
