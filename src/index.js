//index.js
import "./style.css";
import { homeBox } from "./home.js";
import { menuBox } from "./menu.js";
import { aboutBox } from "./about.js";
console.log("Hello! I am shubh");

const homebtn = document.querySelector(".homebtn");
const menubtn = document.querySelector(".menubtn");
const aboutbtn = document.querySelector(".aboutbtn");
const centerContent = document.querySelector("#content");
const introBox = document.createElement("div");
introBox.classList.add("introbox");
const hthree = document.createElement("h3");
hthree.innerHTML = "Welcome to Indian Flavors";
const hfive = document.createElement("h5");
hfive.innerHTML = "Experience the best of Indian cuisine!";
introBox.appendChild(hthree);
introBox.appendChild(hfive);
centerContent.appendChild(introBox);
homebtn.addEventListener("click", () => {
  centerContent.innerHTML = "";
  homeBox();
});
menubtn.addEventListener("click", () => {
  centerContent.innerHTML = "";
  menuBox();
});
aboutbtn.addEventListener("click", () => {
  centerContent.innerHTML = "";
  aboutBox();
});
