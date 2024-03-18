import {
  appendBreakline,
  appendButtonsToNavbar,
  appendFooter,
  appendToDiv,
} from "./home";
import { appendMainImage } from "./home";

export function loadContactPage() {
  appendButtonsToNavbar();
  appendMainImage("ラーメン");
  appendContactInfo();
  appendFooter("ラーメン", "2024");
}

function appendContactInfo() {
  let contactDiv = document.createElement("div");
  contactDiv.classList.add("title");
  let h1 = document.createElement("h1");
  h1.textContent = "Contact us";
  contactDiv.append(h1);

  appendBreakline("#content");
  appendToDiv(contactDiv, "#content");
  appendBreakline("#content");
  appendToDiv(createPerson("Smith", "669 523 612"), "#content");
  appendBreakline("#content");
  appendToDiv(createPerson("Elisa", "694 521 885"), "#content");
}

function createPerson(name, number) {
  let personDiv = document.createElement("div");
  personDiv.classList.add("main-description");
  personDiv.classList.add("showcase");
  let p = document.createElement("p");
  p.textContent = `${name} - ${number}`;
  personDiv.append(p);
  return personDiv;
}
