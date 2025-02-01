// greeting.js
const homeBox = () => {
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
};
export default homeBox;