import {
  appendBreakline,
  appendButtonsToNavbar,
  appendFooter,
  appendToDiv,
} from "./home";
import { appendMainImage } from "./home";

export function loadMenuPage() {
  appendButtonsToNavbar();
  appendMainImage("ラーメン");
  appendMenuInfo();
  appendFooter("ラーメン", "2024");
}

function appendMenuInfo() {
  let contactDiv = document.createElement("div");
  contactDiv.classList.add("title");
  let h1 = document.createElement("h1");
  h1.textContent = "Choose your ramen";
  contactDiv.append(h1);

  appendBreakline("#content");
  appendToDiv(contactDiv, "#content");
  appendBreakline("#content");
  appendToDiv(
    createFood(
      "1",
      "Shoyu Ramen",
      "Soy sauce broth, noodles, chashu pork, bamboo shoots, nori seaweed",
      "10.99"
    ),
    "#content"
  );
  appendBreakline("#content");
  appendToDiv(
    createFood(
      "2",
      "Miso Ramen",
      "Miso broth, noodles, sliced pork, corn, bean sprouts",
      "11.99"
    ),
    "#content"
  );
  appendBreakline("#content");
  appendToDiv(
    createFood(
      "3",
      "Tonkotsu Ramen",
      "Pork bone broth, noodles, tender pork belly, green onions, wood ear mushrooms",
      "12.99"
    ),
    "#content"
  );
  appendBreakline("#content");
  appendToDiv(
    createFood(
      "4",
      "Spicy Tan Tan Ramen ",
      "Spicy sesame broth, ground pork, noodles, bok choy, chili oil",
      "13.99"
    ),
    "#content"
  );
  appendBreakline("#content");
  appendToDiv(
    createFood(
      "5",
      "Vegetarian Ramen",
      "Vegetable broth, noodles, tofu, spinach, mushrooms, menma",
      "1.99"
    ),
    "#content"
  );
}

function createFood(number, name, ingredients, price) {
  let personDiv = document.createElement("div");
  personDiv.classList.add("main-description");
  personDiv.classList.add("showcase");
  let p = document.createElement("p");
  p.textContent = `${number}) ${name} | ${ingredients} | $${price}`;
  personDiv.append(p);
  return personDiv;
}
