import "./style.css";
import { loadHomepage } from "./home.js";
import { loadContactPage } from "./contact.js";
import { loadMenuPage } from "./menu.js";

loadHomepage();

(function bindListeners() {
  let buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", () => {
    document.body.innerHTML = `<header><nav></nav></header>
    <div id="content"></div>`;
    loadHomepage();
    bindListeners();
  });

  buttons[1].addEventListener("click", () => {
    document.body.innerHTML = `<header><nav></nav></header>
    <div id="content"></div>`;
    loadMenuPage();
    bindListeners();
  });

  buttons[2].addEventListener("click", () => {
    document.body.innerHTML = `<header><nav></nav></header>
    <div id="content"></div>`;
    loadContactPage();
    bindListeners();
  });
})();
