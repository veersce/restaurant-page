import MainImage from "./main-image.png";

export function loadHomepage() {
  appendButtonsToNavbar();
  appendMainImage("ラーメン");
  appendBreakline();
  appendDiv("main-description");
}

function appendButtonsToNavbar() {
  appendButton("Home");
  appendButton("Contact");
  appendButton("About Us");
}

function appendMainImage(name) {
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

function appendBreakline() {
  document.body.append(document.createElement("br"));
}

function appendDiv(className) {
  let div = document.createElement("div");
  div.classList.add(`${className}`);
  document.body.append(div);
}
